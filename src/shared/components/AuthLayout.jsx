import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import CookieIcon from '@mui/icons-material/Cookie'

export const AuthLayout = ({ title, subtitle, children, footer }) => (
  <Box component="main" sx={{ minHeight: '100svh', display: 'grid', placeItems: 'center', py: 4 }}>
    <Container maxWidth="xs">
      <Box
        component={RouterLink}
        to="/"
        aria-label="Dulce Antojo, ir al inicio"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3, color: 'primary.main', textDecoration: 'none' }}
      >
        <CookieIcon />
        <Typography variant="h6" component="span" sx={{ color: 'text.primary' }}>
          Dulce Antojo
        </Typography>
      </Box>

      <Paper variant="outlined" sx={{ p: { xs: 3, sm: 4 } }}>
        <Typography variant="h5" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {subtitle}
        </Typography>
        {children}
      </Paper>

      <Box sx={{ mt: 3, textAlign: 'center' }}>{footer}</Box>
    </Container>
  </Box>
)
export default AuthLayout
