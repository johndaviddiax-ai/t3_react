import CakeIcon from '@mui/icons-material/Cake'
import CookieIcon from '@mui/icons-material/Cookie'
import IcecreamIcon from '@mui/icons-material/Icecream'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'

export const formatPrice = (value) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(value)

export const categories = [
  { id: 'galletas', name: 'Galletas', text: 'Crujientes y recién horneadas', Icon: CookieIcon, tone: 'caramel' },
  { id: 'postres', name: 'Postres', text: 'Tortas y brownies para compartir', Icon: CakeIcon, tone: 'pink' },
  { id: 'helados', name: 'Helados', text: 'Paletas y copas heladas', Icon: IcecreamIcon, tone: 'mint' },
  { id: 'regalos', name: 'Cajas de regalo', text: 'Sorpresas para cada ocasión', Icon: CardGiftcardIcon, tone: 'lavender' },
]

export const products = [
  { id: 1, name: 'Brownie de chocolate', text: 'Húmedo, intenso y con nueces.', price: 8500, Icon: CakeIcon, tone: 'caramel' },
  { id: 2, name: 'Galletas con chips', text: 'Bolsa de 6 unidades.', price: 12000, Icon: CookieIcon, tone: 'pink' },
  { id: 3, name: 'Paleta de frutas', text: 'Hecha con fruta natural.', price: 4500, Icon: IcecreamIcon, tone: 'mint' },
  { id: 4, name: 'Caja de bombones', text: 'Surtido de 12 bombones.', price: 28000, Icon: CardGiftcardIcon, tone: 'lavender' },
  { id: 5, name: 'Cupcakes de vainilla', text: 'Pack de 4 con crema suave.', price: 16000, Icon: CakeIcon, tone: 'pink' },
  { id: 6, name: 'Alfajores de arequipe', text: 'Caja de 8 unidades.', price: 18000, Icon: CookieIcon, tone: 'caramel' },
]
