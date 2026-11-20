import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import CookieIcon from '@mui/icons-material/Cookie'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import StarIcon from '@mui/icons-material/Star'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import LogoutIcon from '@mui/icons-material/Logout'

const drawerWidth = 240

const navByRole = {
  cliente: [
    { label: 'Resumen', href: '#resumen', Icon: DashboardIcon },
    { label: 'Mis pedidos', href: '#pedidos', Icon: ShoppingBagIcon },
    { label: 'Recomendados', href: '#recomendados', Icon: StarIcon },
  ],
  admin: [
    { label: 'Resumen', href: '#resumen', Icon: DashboardIcon },
    { label: 'Pedidos', href: '#pedidos', Icon: ShoppingBagIcon },
    { label: 'Inventario', href: '#inventario', Icon: Inventory2Icon },
  ],
}

const roleLabel = { cliente: 'Cliente', admin: 'Administrador' }

export const DashboardLayout = ({ role, children }) => {
  const [open, setOpen] = useState(false)
  const closeDrawer = () => setOpen(false)

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Toolbar sx={{ gap: 1, color: 'primary.main' }}>
        <CookieIcon />
        <Typography variant="h6" component="span" sx={{ color: 'text.primary' }}>
          Dulce Antojo
        </Typography>
      </Toolbar>
      <Divider />
      <List component="nav" aria-label="Menú del panel">
        {navByRole[role].map(({ label, href, Icon }) => (
          <ListItemButton key={label} component="a" href={href} onClick={closeDrawer}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
      <Box sx={{ mt: 'auto', p: 2 }}>
        <Typography variant="caption" color="text.secondary" component="p" sx={{ mb: 1 }}>
          Vista de demostración
        </Typography>
        <Button
          component={RouterLink}
          to={role === 'admin' ? '/dashboard/cliente' : '/dashboard/admin'}
          variant="outlined"
          fullWidth
        >
          Ver como {role === 'admin' ? 'cliente' : 'administrador'}
        </Button>
      </Box>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider',
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="Abrir menú del panel"
            onClick={() => setOpen(true)}
            sx={{ mr: 1, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
            Panel
          </Typography>
          <Chip label={roleLabel[role]} color="primary" size="small" sx={{ mr: 2 }} />
          <Button component={RouterLink} to="/" color="inherit" startIcon={<LogoutIcon />}>
            Salir
          </Button>
        </Toolbar>
      </AppBar>

      <Box component="aside" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={open}
          onClose={closeDrawer}
          sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { width: drawerWidth } }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { width: drawerWidth, borderColor: 'divider' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, minWidth: 0, p: { xs: 2, sm: 3 } }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
export default DashboardLayout
