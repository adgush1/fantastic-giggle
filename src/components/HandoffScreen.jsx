import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function HandoffScreen({ team, qIdx, total, onReady }) {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 4rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'screenIn 0.32s ease forwards',
        '@keyframes screenIn': { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          p: { xs: '2rem 1.25rem', sm: '3rem 2rem' },
          background: 'rgba(255,255,255,0.045)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: 3,
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.55)',
          width: '100%',
          maxWidth: 460,
        }}
      >
        <Typography sx={{ fontSize: '4rem', display: 'block', mb: 1 }}>🎯</Typography>

        <Box
          sx={{
            display: 'inline-block',
            px: 2, py: 0.5,
            borderRadius: '30px',
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            mb: 1.5,
            background: team.color + '22',
            color: team.color,
            border: `2px solid ${team.color}`,
          }}
        >
          {team.name}
        </Box>

        <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.75, fontSize: { xs: '1.55rem', sm: '1.9rem' } }}>
          Your turn!
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1.5 }}>
          Pass the device to {team.name}, then tap when ready.
        </Typography>

        <Box
          sx={{
            display: 'inline-block',
            px: 2, py: 0.4,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '20px',
            fontSize: '0.82rem',
            color: 'text.secondary',
            mb: 3,
          }}
        >
          Question {qIdx + 1} of {total}
        </Box>

        <Button
          variant="contained"
          fullWidth
          onClick={onReady}
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
          We're Ready! 🚀
        </Button>
      </Box>
    </Box>
  );
}
