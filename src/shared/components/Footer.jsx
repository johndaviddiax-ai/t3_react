import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const year = new Date().getFullYear()

export const Footer = () => (
  <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', py: 4, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <Typography variant="body2" color="text.secondary" align="center">
        © {year} Dulce Antojo · Dulcería artesanal
      </Typography>
    </Container>
  </Box>
)
export default Footer
