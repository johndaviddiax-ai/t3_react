import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { candyTones } from '../theme.js'
import { formatPrice } from '../data/products.js'

export const ProductCard = ({ product }) => {
  const { name, text, price, Icon, tone } = product
  const { bg, fg } = candyTones[tone]

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ bgcolor: bg, color: fg, height: 130, display: 'grid', placeItems: 'center' }}>
        <Icon sx={{ fontSize: 56 }} />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h3">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {text}
        </Typography>
        <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700 }}>
          {formatPrice(price)}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button variant="outlined" startIcon={<AddShoppingCartIcon />} aria-label={`Agregar ${name} al carrito`}>
          Agregar
        </Button>
      </CardActions>
    </Card>
  )
}
export default ProductCard
