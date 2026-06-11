import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0f6e8c',
    },
    secondary: {
      main: '#f6a01a',
    },
    background: {
      default: '#f5f8fb',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Poppins, Segoe UI, sans-serif',
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
})
