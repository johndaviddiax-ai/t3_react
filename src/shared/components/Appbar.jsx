import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import CookieIcon from '@mui/icons-material/Cookie'

const pages = [
  { label: 'Categorías', href: '#categorias' },
  { label: 'Productos', href: '#productos' },
  { label: 'Nosotros', href: '#nosotros' },
]

export const Appbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget)
  const handleCloseNavMenu = () => setAnchorElNav(null)

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <IconButton
              size="large"
              aria-label="Abrir menú de navegación"
              aria-controls="menu-nav"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-nav"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} component="a" href={page.href} onClick={handleCloseNavMenu}>
                  {page.label}
                </MenuItem>
              ))}
              <MenuItem component={RouterLink} to="/login" onClick={handleCloseNavMenu}>
                Iniciar sesión
              </MenuItem>
              <MenuItem component={RouterLink} to="/register" onClick={handleCloseNavMenu}>
                Registrarse
              </MenuItem>
            </Menu>
          </Box>

          <Box
            component={RouterLink}
            to="/"
            aria-label="Dulce Antojo, ir al inicio"
            sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main', textDecoration: 'none', mr: 3 }}
          >
            <CookieIcon />
            <Typography variant="h6" component="span" noWrap sx={{ color: 'text.primary' }}>
              Dulce Antojo
            </Typography>
          </Box>

          <Box component="nav" aria-label="Principal" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {pages.map((page) => (
              <Button key={page.label} component="a" href={page.href} color="inherit">
                {page.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            <Button component={RouterLink} to="/login" color="inherit">
              Iniciar sesión
            </Button>
            <Button component={RouterLink} to="/register" variant="contained">
              Registrarse
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Appbar
