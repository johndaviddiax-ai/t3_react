import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import StarIcon from '@mui/icons-material/Star'
import FavoriteIcon from '@mui/icons-material/Favorite'
import DashboardLayout from '../../shared/components/DashboardLayout.jsx'
import ProductCard from '../../shared/components/ProductCard.jsx'
import StatCard from '../../shared/components/StatCard.jsx'
import StatusChip from '../../shared/components/StatusChip.jsx'
import { formatPrice, products } from '../../shared/data/products.js'

const orders = [
  { id: '#1042', detail: 'Brownie de chocolate x2', total: 17000, status: 'En camino' },
  { id: '#1038', detail: 'Caja de bombones', total: 28000, status: 'Preparando' },
  { id: '#1031', detail: 'Galletas con chips', total: 12000, status: 'Entregado' },
]

export const DashboardCliente = () => (
  <DashboardLayout role="cliente">
    <Box component="section" id="resumen" sx={{ mb: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Hola, Camila
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Aquí tienes el resumen de tu cuenta.
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <StatCard label="Pedidos activos" value="2" Icon={ShoppingBagIcon} tone="pink" />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <StatCard label="Puntos dulces" value="480" Icon={StarIcon} tone="caramel" />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <StatCard label="Favoritos" value="12" Icon={FavoriteIcon} tone="lavender" />
        </Grid>
      </Grid>
    </Box>

    <Box component="section" id="pedidos" sx={{ mb: 5 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Mis pedidos
      </Typography>
      <Paper variant="outlined">
        {orders.map((order, index) => (
          <Box
            key={order.id}
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              flexWrap: 'wrap',
              borderTop: index ? 1 : 0,
              borderColor: 'divider',
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 500 }}>
                {order.id} · {order.detail}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {formatPrice(order.total)}
              </Typography>
            </Box>
            <StatusChip status={order.status} />
          </Box>
        ))}
      </Paper>
    </Box>

    <Box component="section" id="recomendados">
      <Typography variant="h5" component="h2" gutterBottom>
        Recomendados para ti
      </Typography>
      <Grid container spacing={3}>
        {products.slice(0, 3).map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </DashboardLayout>
)
export default DashboardCliente
