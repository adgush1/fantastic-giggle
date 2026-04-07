import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const MEDALS = ['🥇', '🥈', '🥉', '4️⃣'];

export default function ResultsScreen({ mode, score, total, teams, onPlayAgain }) {
  const pct = Math.round((score / total) * 100);
  const perfMsg =
    pct === 100 ? '🌟 Perfect score! Legendary!'
    : pct >= 80  ? '🔥 Excellent work!'
    : pct >= 60  ? '👍 Good effort, keep it up!'
    : pct >= 40  ? '📚 Not bad — room to grow!'
    :              "💪 Keep studying, you'll get there!";

  const sorted = mode === 'teams' ? [...teams].sort((a, b) => b.score - a.score) : [];

  return (
    <Box
      sx={{
        animation: 'screenIn 0.32s ease forwards',
        '@keyframes screenIn': { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 2.5 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 55%, #f97316 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
            filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.35))',
          }}
        >
          Results
        </Typography>
      </Box>

      {mode === 'single' ? (
        <Box
          sx={{
            background: 'rgba(255,255,255,0.045)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 3,
            p: { xs: '2rem 1.5rem', sm: '2.5rem 2rem' },
            textAlign: 'center',
            mb: 2,
            backdropFilter: 'blur(12px)',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '3rem', sm: '3.8rem' },
              fontWeight: 700,
              lineHeight: 1,
              background: 'linear-gradient(135deg, #a78bfa, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 0.5,
            }}
          >
            {score} / {total}
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1.5, fontWeight: 400 }}>
            {pct}%
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500, fontSize: '1.1rem' }}>
            {perfMsg}
          </Typography>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
          {sorted.map((team, i) => {
            const teamPct = Math.round((team.score / total) * 100);
            return (
              <Box
                key={team.name}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  px: 2, py: 1.25,
                  background: i === 0 ? 'rgba(139,92,246,0.08)' : 'rgba(255,255,255,0.045)',
                  border: i === 0 ? '2px solid rgba(139,92,246,0.45)' : '1px solid rgba(255,255,255,0.09)',
                  borderRadius: 2,
                  backdropFilter: 'blur(12px)',
                  boxShadow: i === 0 ? '0 0 20px rgba(139,92,246,0.15)' : 'none',
                }}
              >
                <Typography sx={{ fontSize: '1.5rem', width: '2rem', textAlign: 'center', flexShrink: 0 }}>
                  {MEDALS[i]}
                </Typography>
                <Box sx={{ width: 11, height: 11, borderRadius: '50%', background: team.color, flexShrink: 0 }} />
                <Typography sx={{ flex: 1, fontWeight: 600, fontSize: '1rem' }}>{team.name}</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>
                  {team.score}
                  <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.8rem', ml: 0.5 }}>
                    {teamPct}%
                  </Typography>
                </Typography>
              </Box>
            );
          })}
        </Box>
      )}

      <Button
        variant="contained"
        fullWidth
        onClick={onPlayAgain}
        sx={{
          py: 1.5,
          fontSize: '1.05rem',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
          borderRadius: 2,
          boxShadow: '0 4px 22px rgba(139,92,246,0.38)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 7px 28px rgba(139,92,246,0.52)',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
          },
          transition: 'all 0.22s',
        }}
      >
        Play Again
      </Button>
    </Box>
  );
}
