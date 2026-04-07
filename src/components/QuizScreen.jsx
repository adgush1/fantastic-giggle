import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function QuizScreen({
  question,
  qIdx,
  total,
  score,
  mode,
  currentTeam,
  answeredIdx,
  onAnswer,
  onNext,
}) {
  const isAnswered = answeredIdx !== null;
  const progress = ((qIdx + 1) / total) * 100;

  useEffect(() => {
    function onKey(e) {
      const map = { '1': 0, '2': 1, '3': 2, '4': 3, a: 0, b: 1, c: 2, d: 3 };
      const idx = map[e.key.toLowerCase()];
      if (idx !== undefined && !isAnswered) { onAnswer(idx); return; }
      if ((e.key === 'Enter' || e.key === ' ') && isAnswered) { e.preventDefault(); onNext(); }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isAnswered, onAnswer, onNext]);

  function choiceState(i) {
    if (!isAnswered) return 'default';
    if (i === question.a) return 'correct';
    if (i === answeredIdx && i !== question.a) return 'incorrect';
    return 'dimmed';
  }

  return (
    <Box
      sx={{
        animation: 'screenIn 0.32s ease forwards',
        '@keyframes screenIn': { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      }}
    >
      {/* Team bar */}
      {mode === 'teams' && currentTeam && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 2, py: 0.75,
            background: 'rgba(255,255,255,0.045)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 1.5,
            mb: 1.5,
            backdropFilter: 'blur(10px)',
          }}
        >
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: currentTeam.color, flexShrink: 0 }} />
          <Typography variant="body2" sx={{ fontWeight: 600 }}>{currentTeam.name}</Typography>
          <Typography variant="body2" sx={{ ml: 'auto', color: 'text.secondary' }}>
            Score: {currentTeam.score}
          </Typography>
        </Box>
      )}

      {/* Progress */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', whiteSpace: 'nowrap' }}>
          {qIdx + 1} / {total}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            flex: 1,
            height: 5,
            background: 'rgba(255,255,255,0.09)',
            '& .MuiLinearProgress-bar': {
              background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
            },
          }}
        />
        {mode === 'single' && (
          <Typography variant="caption" sx={{ color: 'text.secondary', whiteSpace: 'nowrap' }}>
            Score: {score}
          </Typography>
        )}
      </Box>

      {/* Question card */}
      <Box
        sx={{
          background: 'rgba(255,255,255,0.045)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: 2,
          p: { xs: '1.25rem', sm: '1.75rem' },
          mb: 1.5,
          backdropFilter: 'blur(12px)',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'primary.main',
            mb: 1,
          }}
        >
          Question {qIdx + 1}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: '1.05rem', sm: '1.18rem' }, fontWeight: 500, lineHeight: 1.55 }}
        >
          {question.q}
        </Typography>
      </Box>

      {/* Choices */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, mb: 1.5 }}>
        {question.c.map((choice, i) => {
          const state = choiceState(i);
          return (
            <Box
              key={i}
              component="button"
              onClick={() => !isAnswered && onAnswer(i)}
              disabled={isAnswered}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                px: 1.5, py: 1.1,
                background:
                  state === 'correct' ? 'rgba(16,185,129,0.15)'
                  : state === 'incorrect' ? 'rgba(244,63,94,0.15)'
                  : 'rgba(255,255,255,0.045)',
                border: '1.5px solid',
                borderColor:
                  state === 'correct' ? '#10b981'
                  : state === 'incorrect' ? '#f43f5e'
                  : 'rgba(255,255,255,0.09)',
                borderRadius: 1.5,
                color: state === 'dimmed' ? 'rgba(240,240,255,0.35)' : '#f0f0ff',
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: '0.93rem',
                fontWeight: 500,
                cursor: isAnswered ? 'default' : 'pointer',
                textAlign: 'left',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.18s',
                outline: 'none',
                boxShadow:
                  state === 'correct' ? '0 0 20px rgba(16,185,129,0.22)'
                  : state === 'incorrect' ? '0 0 20px rgba(244,63,94,0.18)'
                  : 'none',
                animation:
                  state === 'correct' ? 'correctPop 0.35s ease'
                  : state === 'incorrect' ? 'shake 0.38s ease'
                  : 'none',
                '@keyframes correctPop': { '0%': { transform: 'scale(1)' }, '40%': { transform: 'scale(1.018)' }, '100%': { transform: 'scale(1)' } },
                '@keyframes shake': { '0%,100%': { transform: 'translateX(0)' }, '25%': { transform: 'translateX(-7px)' }, '75%': { transform: 'translateX(7px)' } },
                '&:hover:not(:disabled)': {
                  borderColor: 'primary.main',
                  background: 'rgba(139,92,246,0.1)',
                  transform: 'translateX(4px)',
                },
              }}
            >
              <Box
                sx={{
                  width: 30, height: 30,
                  borderRadius: '8px',
                  background:
                    state === 'correct' ? '#10b981'
                    : state === 'incorrect' ? '#f43f5e'
                    : 'rgba(255,255,255,0.07)',
                  border: '1px solid',
                  borderColor:
                    state === 'correct' ? '#10b981'
                    : state === 'incorrect' ? '#f43f5e'
                    : 'rgba(255,255,255,0.09)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  flexShrink: 0,
                  color: (state === 'correct' || state === 'incorrect') ? 'white' : 'inherit',
                  transition: 'all 0.2s',
                }}
              >
                {LETTERS[i]}
              </Box>
              <span>{choice}</span>
            </Box>
          );
        })}
      </Box>

      {/* Next button */}
      {isAnswered && (
        <Button
          variant="contained"
          fullWidth
          onClick={onNext}
          sx={{
            py: 1.5,
            fontSize: '1.05rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
            borderRadius: 2,
            boxShadow: '0 4px 22px rgba(139,92,246,0.38)',
            animation: 'fadeUp 0.25s ease',
            '@keyframes fadeUp': { from: { opacity: 0, transform: 'translateY(8px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 7px 28px rgba(139,92,246,0.52)',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
            },
            transition: 'all 0.22s',
          }}
        >
          {qIdx < total - 1 ? 'Next →' : 'See Results →'}
        </Button>
      )}
    </Box>
  );
}
