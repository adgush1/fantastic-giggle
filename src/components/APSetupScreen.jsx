import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AP_BANK } from '../data/apQuestions';
import { TEAM_COLORS } from '../data/questions';

const glass = {
  background: 'rgba(255,255,255,0.045)',
  border: '1px solid rgba(255,255,255,0.09)',
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.55)',
  borderRadius: 2,
  p: 2.5,
  mb: 1.5,
};

const DIFF_STYLES = {
  easy:   { color: '#10b981', selBg: 'rgba(16,185,129,0.13)',  selBorder: '#10b981', selShadow: 'rgba(16,185,129,0.25)' },
  medium: { color: '#f59e0b', selBg: 'rgba(245,158,11,0.13)',  selBorder: '#f59e0b', selShadow: 'rgba(245,158,11,0.25)' },
  hard:   { color: '#f43f5e', selBg: 'rgba(244,63,94,0.13)',   selBorder: '#f43f5e', selShadow: 'rgba(244,63,94,0.25)' },
  mixed:  { color: '#a78bfa', selBg: 'rgba(167,139,250,0.13)', selBorder: '#a78bfa', selShadow: 'rgba(167,139,250,0.25)' },
};

function Chip({ label, selected, color, selBg, selBorder, selShadow, onClick, icon, fullWidth }) {
  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        p: '0.65rem 0.75rem',
        borderRadius: '10px',
        border: '1.5px solid',
        borderColor: selected ? selBorder || 'primary.main' : 'rgba(255,255,255,0.09)',
        background: selected ? (selBg || 'rgba(139,92,246,0.15)') : 'rgba(255,255,255,0.02)',
        color: selected ? (color || '#f0f0ff') : '#6b7280',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.45rem',
        fontSize: '0.88rem',
        fontWeight: 600,
        fontFamily: "'Space Grotesk', system-ui, sans-serif",
        userSelect: 'none',
        transition: 'all 0.2s',
        boxShadow: selected ? `0 0 14px ${selShadow || 'rgba(139,92,246,0.25)'}` : 'none',
        outline: 'none',
        width: fullWidth ? '100%' : undefined,
        textAlign: 'center',
        lineHeight: 1.25,
        '&:hover': {
          borderColor: selBorder || 'primary.main',
          background: selBg || 'rgba(139,92,246,0.08)',
          color: '#f0f0ff',
        },
      }}
    >
      {icon && <span style={{ fontSize: '1rem', lineHeight: 1 }}>{icon}</span>}
      <span>{label}</span>
    </Box>
  );
}

export default function APSetupScreen({ onStart, onBack, warnMsg }) {
  const subjectKeys = Object.keys(AP_BANK);
  const [subjectKey, setSubjectKey] = useState(subjectKeys[0]);
  const subject = AP_BANK[subjectKey];

  const [selectedUnits, setSelectedUnits] = useState(() => subject.units.map(u => u.id));
  const [diff, setDiff] = useState('medium');
  const [count, setCount] = useState(10);
  const [apMode, setApMode] = useState('single');
  const [teamCount, setTeamCount] = useState(2);
  const [teamNames, setTeamNames] = useState(['Team 1', 'Team 2', 'Team 3', 'Team 4']);

  function changeSubject(key) {
    setSubjectKey(key);
    setSelectedUnits(AP_BANK[key].units.map(u => u.id));
  }

  function toggleUnit(id) {
    setSelectedUnits(prev =>
      prev.includes(id) ? prev.filter(u => u !== id) : [...prev, id]
    );
  }

  const allSelected = selectedUnits.length === subject.units.length;
  function toggleAll() {
    setSelectedUnits(allSelected ? [] : subject.units.map(u => u.id));
  }

  const poolSize = useMemo(() => {
    let n = 0;
    subject.units.forEach(u => {
      if (!selectedUnits.includes(u.id)) return;
      if (diff === 'mixed') n += u.easy.length + u.medium.length + u.hard.length;
      else n += u[diff].length;
    });
    return n;
  }, [subject, selectedUnits, diff]);

  function handleStart() {
    onStart({
      subjectKey,
      subjectName: subject.name,
      units: subject.units.filter(u => selectedUnits.includes(u.id)),
      diff,
      count,
      mode: apMode,
      teamCount,
      teamNames,
    });
  }

  return (
    <Box sx={{ animation: 'screenIn 0.32s ease forwards', '@keyframes screenIn': { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } } }}>
      <Box sx={{ textAlign: 'center', mb: 3, pt: 0.5 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 55%, #f97316 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.35))',
          }}
        >
          AP Study Mode
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 0.5 }}>
          Practice questions by AP exam unit
        </Typography>
      </Box>

      {/* Subject */}
      <Box sx={glass}>
        <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'text.secondary', mb: 1.5 }}>
          Subject
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
          {subjectKeys.map(k => (
            <Chip
              key={k}
              label={AP_BANK[k].name}
              icon={AP_BANK[k].icon}
              selected={subjectKey === k}
              onClick={() => changeSubject(k)}
              fullWidth
            />
          ))}
        </Box>
      </Box>

      {/* Units */}
      <Box sx={glass}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'text.secondary' }}>
            Units
          </Typography>
          <Box
            component="button"
            onClick={toggleAll}
            sx={{
              background: 'none', border: 'none', color: 'primary.main',
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: '0.82rem', fontWeight: 500, cursor: 'pointer',
              p: '0.2rem 0.5rem', borderRadius: '5px', transition: 'background 0.2s',
              '&:hover': { background: 'rgba(139,92,246,0.12)' },
            }}
          >
            {allSelected ? 'Deselect All' : 'Select All'}
          </Box>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0.75, '@media (max-width:550px)': { gridTemplateColumns: '1fr' } }}>
          {subject.units.map(u => (
            <Chip
              key={u.id}
              label={u.name}
              icon={u.icon}
              selected={selectedUnits.includes(u.id)}
              onClick={() => toggleUnit(u.id)}
              fullWidth
            />
          ))}
        </Box>
      </Box>

      {/* Difficulty */}
      <Box sx={glass}>
        <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'text.secondary', mb: 1.5 }}>
          Difficulty
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0.75, '@media (max-width:550px)': { gridTemplateColumns: 'repeat(2, 1fr)' } }}>
          {Object.entries(DIFF_STYLES).map(([val, s]) => (
            <Chip
              key={val}
              label={val.charAt(0).toUpperCase() + val.slice(1)}
              selected={diff === val}
              color={s.color}
              selBg={s.selBg}
              selBorder={s.selBorder}
              selShadow={s.selShadow}
              onClick={() => setDiff(val)}
            />
          ))}
        </Box>
      </Box>

      {/* Count */}
      <Box sx={glass}>
        <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'text.secondary', mb: 1.5 }}>
          Number of Questions
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0.75 }}>
          {[5, 10, 15, 20].map(n => (
            <Chip key={n} label={String(n)} selected={count === n} onClick={() => setCount(n)} />
          ))}
        </Box>
        <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', mt: 1.25 }}>
          {poolSize} question{poolSize === 1 ? '' : 's'} available in selection
        </Typography>
      </Box>

      {/* Solo / Teams */}
      <Box sx={glass}>
        <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'text.secondary', mb: 1.5 }}>
          Play Style
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
          {[{ val: 'single', label: '👤 Solo' }, { val: 'teams', label: '👥 Study Group' }].map(({ val, label }) => (
            <Box
              key={val}
              component="button"
              onClick={() => setApMode(val)}
              sx={{
                p: '0.8rem',
                borderRadius: '11px',
                border: '2px solid',
                borderColor: apMode === val ? 'primary.main' : 'rgba(255,255,255,0.09)',
                background: apMode === val ? 'rgba(139,92,246,0.13)' : 'transparent',
                color: apMode === val ? '#f0f0ff' : '#6b7280',
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '0.5rem', transition: 'all 0.2s', outline: 'none',
                boxShadow: apMode === val ? '0 0 18px rgba(139,92,246,0.3)' : 'none',
                '&:hover': { borderColor: 'primary.main', color: '#f0f0ff' },
              }}
            >
              {label}
            </Box>
          ))}
        </Box>

        {apMode === 'teams' && (
          <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(255,255,255,0.09)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, fontSize: '0.88rem', color: 'text.secondary' }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Number of teams:</Typography>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {[2, 3, 4].map(n => (
                  <Box
                    key={n}
                    component="button"
                    onClick={() => setTeamCount(n)}
                    sx={{
                      width: 36, height: 36,
                      borderRadius: '50%',
                      border: '2px solid',
                      borderColor: teamCount === n ? 'primary.main' : 'rgba(255,255,255,0.09)',
                      background: teamCount === n ? 'primary.main' : 'transparent',
                      color: teamCount === n ? 'white' : '#6b7280',
                      fontFamily: "'Space Grotesk', system-ui, sans-serif",
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s', outline: 'none',
                      boxShadow: teamCount === n ? '0 0 14px rgba(139,92,246,0.3)' : 'none',
                      '&:hover': { borderColor: 'primary.main', color: '#f0f0ff' },
                    }}
                  >
                    {n}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
              {Array.from({ length: teamCount }, (_, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                  <Box sx={{ width: 11, height: 11, borderRadius: '50%', background: TEAM_COLORS[i], flexShrink: 0 }} />
                  <TextField
                    size="small"
                    placeholder={`Team ${i + 1}`}
                    value={teamNames[i]}
                    onChange={e => {
                      const next = [...teamNames];
                      next[i] = e.target.value;
                      setTeamNames(next);
                    }}
                    sx={{
                      flex: 1,
                      '& .MuiOutlinedInput-root': {
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '9px',
                        fontSize: '0.92rem',
                        '& fieldset': { borderColor: 'rgba(255,255,255,0.09)' },
                        '&:hover fieldset': { borderColor: 'primary.main' },
                        '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>

      {warnMsg && (
        <Typography sx={{ textAlign: 'center', color: 'warning.main', fontSize: '0.88rem', mb: 1, minHeight: '1.3em' }}>
          {warnMsg}
        </Typography>
      )}

      <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 1 }}>
        <Button
          variant="outlined"
          onClick={onBack}
          sx={{
            py: 1.5, px: 2, fontWeight: 600,
            borderColor: 'rgba(255,255,255,0.18)',
            color: 'text.secondary',
            borderRadius: 2,
            '&:hover': { borderColor: 'primary.main', color: '#f0f0ff', background: 'rgba(139,92,246,0.08)' },
          }}
        >
          ← Back
        </Button>
        <Button
          variant="contained"
          fullWidth
          disabled={selectedUnits.length === 0 || poolSize === 0}
          onClick={handleStart}
          sx={{
            py: 1.5,
            fontSize: '1.05rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
            borderRadius: 2,
            boxShadow: '0 4px 22px rgba(139,92,246,0.38)',
            letterSpacing: '0.01em',
            '&:hover:not(:disabled)': {
              transform: 'translateY(-2px)',
              boxShadow: '0 7px 28px rgba(139,92,246,0.52)',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
            },
            '&:active:not(:disabled)': { transform: 'translateY(0)' },
            '&:disabled': { opacity: 0.32, boxShadow: 'none', background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)' },
            transition: 'all 0.22s',
          }}
        >
          Start Study Session →
        </Button>
      </Box>
    </Box>
  );
}
