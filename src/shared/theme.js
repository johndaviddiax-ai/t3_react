import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: { main: '#C2255C', dark: '#9C1A47', light: '#F783AC', contrastText: '#FFFFFF' },
    secondary: { main: '#8A5A1F', contrastText: '#FFFFFF' },
    background: { default: '#FFF8F1', paper: '#FFFFFF' },
    text: { primary: '#3E2723', secondary: '#6D4C41' },
    divider: '#F0E0D2',
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 999, paddingInline: 20 } },
    },
    MuiCard: {
      defaultProps: { variant: 'outlined' },
      styleOverrides: { root: { borderColor: '#F0E0D2' } },
    },
    MuiPaper: { styleOverrides: { outlined: { borderColor: '#F0E0D2' } } },
  },
})

// Colores suaves para tarjetas de dulces
export const candyTones = {
  pink: { bg: '#FFE3EC', fg: '#C2255C' },
  caramel: { bg: '#FFEFD5', fg: '#8A5A1F' },
  mint: { bg: '#DDF4E8', fg: '#1B6B45' },
  lavender: { bg: '#EBE4FA', fg: '#5B3FA6' },
}
