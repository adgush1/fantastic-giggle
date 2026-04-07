import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#8b5cf6' },
    secondary: { main: '#06b6d4' },
    success: { main: '#10b981' },
    error: { main: '#f43f5e' },
    warning: { main: '#f59e0b' },
    background: {
      default: '#07071a',
      paper: 'rgba(255,255,255,0.045)',
    },
    text: {
      primary: '#f0f0ff',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: "'Space Grotesk', -apple-system, system-ui, sans-serif",
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shape: { borderRadius: 12 },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: "'Space Grotesk', -apple-system, system-ui, sans-serif",
          fontWeight: 600,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { borderRadius: 3 },
        bar: { borderRadius: 3 },
      },
    },
  },
});

export default theme;
