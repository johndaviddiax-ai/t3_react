import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LinearProgress from '@mui/material/LinearProgress'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import PaidIcon from '@mui/icons-material/Paid'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import PeopleIcon from '@mui/icons-material/People'
import DashboardLayout from '../../shared/components/DashboardLayout.jsx'
import StatCard from '../../shared/components/StatCard.jsx'
import StatusChip from '../../shared/components/StatusChip.jsx'
import { formatPrice } from '../../shared/data/products.js'

const orders = [
  { id: '#1045', client: 'Laura Gómez', total: 34000, status: 'Preparando' },
  { id: '#1044', client: 'Andrés Ruiz', total: 12000, status: 'En camino' },
  { id: '#1043', client: 'Sofía Pérez', total: 56000, status: 'Entregado' },
  { id: '#1042', client: 'Camila Torres', total: 17000, status: 'En camino' },
  { id: '#1041', client: 'Juan Castro', total: 8500, status: 'Cancelado' },
]

const stock = [
  { name: 'Brownie de chocolate', units: 12, percent: 20 },
  { name: 'Caja de bombones', units: 9, percent: 15 },
  { name: 'Paleta de frutas', units: 30, percent: 45 },
]

export const DashboardAdmin = () => (
  <DashboardLayout role="admin">
    <Box component="section" id="resumen" sx={{ mb: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Panel de administración
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Resumen de la tienda de hoy.
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard label="Ventas de hoy" value={formatPrice(1250000)} Icon={PaidIcon} tone="mint" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard label="Pedidos" value="38" Icon={ShoppingBagIcon} tone="pink" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard label="Productos" value="124" Icon={Inventory2Icon} tone="caramel" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard label="Clientes" value="312" Icon={PeopleIcon} tone="lavender" />
        </Grid>
      </Grid>
    </Box>

    <Box component="section" id="pedidos" sx={{ mb: 5 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Pedidos recientes
      </Typography>
      <TableContainer component={Paper} variant="outlined">
        <Table aria-label="Pedidos recientes">
          <TableHead>
            <TableRow>
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.client}</TableCell>
                <TableCell align="right">{formatPrice(order.total)}</TableCell>
                <TableCell>
                  <StatusChip status={order.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

    <Box component="section" id="inventario">
      <Typography variant="h5" component="h2" gutterBottom>
        Inventario bajo
      </Typography>
      <Paper variant="outlined" sx={{ p: 3, display: 'grid', gap: 3 }}>
        {stock.map((item) => (
          <Box key={item.name}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography sx={{ fontWeight: 500 }}>{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.units} unidades
              </Typography>
            </Box>
            <LinearProgress variant="determinate" value={item.percent} aria-label={`Stock de ${item.name}`} />
          </Box>
        ))}
      </Paper>
    </Box>
  </DashboardLayout>
)
export default DashboardAdmin
