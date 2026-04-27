import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { BANK, TEAM_COLORS } from '../data/questions';

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
  easy:   { color: '#10b981', selBg: 'rgba(16,185,129,0.13)',   selBorder: '#10b981',  selShadow: 'rgba(16,185,129,0.25)' },
  medium: { color: '#f59e0b', selBg: 'rgba(245,158,11,0.13)',   selBorder: '#f59e0b',  selShadow: 'rgba(245,158,11,0.25)' },
  hard:   { color: '#f43f5e', selBg: 'rgba(244,63,94,0.13)',    selBorder: '#f43f5e',  selShadow: 'rgba(244,63,94,0.25)' },
  mixed:  { color: '#a78bfa', selBg: 'rgba(167,139,250,0.13)',  selBorder: '#a78bfa',  selShadow: 'rgba(167,139,250,0.25)' },
};

function SelectChip({ label, selected, color, selBg, selBorder, selShadow, onClick, icon }) {
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
        '&:hover': {
          borderColor: selBorder || 'primary.main',
          background: selBg || 'rgba(139,92,246,0.08)',
          color: '#f0f0ff',
        },
      }}
    >
      {icon && <span style={{ fontSize: '1rem', lineHeight: 1 }}>{icon}</span>}
      {label}
    </Box>
  );
}

export default function SettingsScreen({
  mode, setMode,
  teamCount, setTeamCount,
  teamNames, setTeamNames,
  selectedTopics, setSelectedTopics,
  selectedDiff, setSelectedDiff,
  selectedCount, setSelectedCount,
  onStart,
  onApMode,
  warnMsg,
}) {
  const allSelected = Object.keys(BANK).every(t => selectedTopics.includes(t));

  function toggleTopic(name) {
    setSelectedTopics(prev =>
      prev.includes(name) ? prev.filter(t => t !== name) : [...prev, name]
    );
  }

  function toggleAllTopics() {
    setSelectedTopics(allSelected ? [] : Object.keys(BANK));
  }

  return (
    <Box sx={{ animation: 'screenIn 0.32s ease forwards', '@keyframes screenIn': { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } } }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4, pt: 0.5 }}>
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
          Trivia Quest
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 0.5 }}>
          Test your knowledge across the universe
        </Typography>
      </Box>

      {/* Game Mode */}
      <Box sx={glass}>
        <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'text.secondary', mb: 1.5 }}>
          Game Mode
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, '@media (max-width:550px)': { gridTemplateColumns: '1fr' } }}>
          {[
            { val: 'single', label: '👤 Single', onClick: () => setMode('single'), selected: mode === 'single' },
            { val: 'teams', label: '👥 Teams', onClick: () => setMode('teams'), selected: mode === 'teams' },
            { val: 'ap', label: '🎓 AP Study', onClick: onApMode, selected: false },
          ].map(({ val, label, onClick, selected }) => (
            <Box
              key={val}
              component="button"
              onClick={onClick}
              sx={{
                p: '0.8rem',
                borderRadius: '11px',
                border: '2px solid',
                borderColor: selected ? 'primary.main' : 'rgba(255,255,255,0.09)',
                background: selected ? 'rgba(139,92,246,0.13)' : 'transparent',
                color: selected ? '#f0f0ff' : '#6b7280',
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
                outline: 'none',
                boxShadow: selected ? '0 0 18px rgba(139,92,246,0.3)' : 'none',
                '&:hover': { borderColor: 'primary.main', color: '#f0f0ff' },
              }}
            >
              {label}
            </Box>
          ))}
        </Box>

        {/* Teams setup */}
        {mode === 'teams' && (
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
                      transition: 'all 0.2s',
                      outline: 'none',
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

      {/* Topics */}
      <Box sx={glass}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'text.secondary' }}>
            Topics
          </Typography>
          <Box
            component="button"
            onClick={toggleAllTopics}
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
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0.75, '@media (max-width:550px)': { gridTemplateColumns: 'repeat(2, 1fr)' } }}>
          {Object.entries(BANK).map(([name, data]) => (
            <SelectChip
              key={name}
              label={name}
              icon={data.icon}
              selected={selectedTopics.includes(name)}
              onClick={() => toggleTopic(name)}
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
            <SelectChip
              key={val}
              label={val.charAt(0).toUpperCase() + val.slice(1)}
              selected={selectedDiff === val}
              color={s.color}
              selBg={s.selBg}
              selBorder={s.selBorder}
              selShadow={s.selShadow}
              onClick={() => setSelectedDiff(val)}
            />
          ))}
        </Box>
      </Box>

      {/* Question count */}
      <Box sx={glass}>
        <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'text.secondary', mb: 1.5 }}>
          Number of Questions
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0.75 }}>
          {[5, 10, 15, 20].map(n => (
            <SelectChip
              key={n}
              label={String(n)}
              selected={selectedCount === n}
              onClick={() => setSelectedCount(n)}
            />
          ))}
        </Box>
      </Box>

      {warnMsg && (
        <Typography sx={{ textAlign: 'center', color: 'warning.main', fontSize: '0.88rem', mb: 1, minHeight: '1.3em' }}>
          {warnMsg}
        </Typography>
      )}

      <Button
        variant="contained"
        fullWidth
        disabled={selectedTopics.length === 0}
        onClick={onStart}
        sx={{
          py: 1.5,
          fontSize: '1.05rem',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
          borderRadius: 2,
          boxShadow: '0 4px 22px rgba(139,92,246,0.38)',
          position: 'relative',
          overflow: 'hidden',
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
        Start Quiz →
      </Button>
    </Box>
  );
}
