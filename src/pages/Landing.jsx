import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import VerifiedIcon from '@mui/icons-material/Verified'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CakeIcon from '@mui/icons-material/Cake'
import CookieIcon from '@mui/icons-material/Cookie'
import IcecreamIcon from '@mui/icons-material/Icecream'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import Appbar from '../shared/components/Appbar.jsx'
import Footer from '../shared/components/Footer.jsx'
import ProductCard from '../shared/components/ProductCard.jsx'
import { candyTones } from '../shared/theme.js'
import { categories, products } from '../shared/data/products.js'

const features = [
  { title: 'Ingredientes de calidad', text: 'Chocolate real, mantequilla y frutas naturales.', Icon: VerifiedIcon },
  { title: 'Envío rápido', text: 'Entregas el mismo día en tu ciudad.', Icon: LocalShippingIcon },
  { title: 'Hecho con cariño', text: 'Recetas artesanales preparadas cada mañana.', Icon: FavoriteIcon },
]

const heroTiles = [
  { Icon: CakeIcon, tone: 'pink' },
  { Icon: CookieIcon, tone: 'caramel' },
  { Icon: IcecreamIcon, tone: 'mint' },
  { Icon: CardGiftcardIcon, tone: 'lavender' },
]

const SectionTitle = ({ title, text }) => (
  <Box sx={{ textAlign: 'center', mb: 5 }}>
    <Typography variant="h4" component="h2" gutterBottom>
      {title}
    </Typography>
    <Typography color="text.secondary">{text}</Typography>
  </Box>
)

export const Landing = () => (
  <>
    <Appbar />
    <main>
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h2" component="h1" sx={{ fontSize: { xs: '2.25rem', md: '3.25rem' }, mb: 2 }}>
                Dulces que alegran <Box component="span" sx={{ color: 'primary.main' }}>tu día</Box>
              </Typography>
              <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 400, mb: 4 }}>
                Chocolates, galletas y postres artesanales. Pide en línea y recíbelos frescos en la puerta de tu casa.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button href="#productos" variant="contained" size="large">
                  Ver productos
                </Button>
                <Button component={RouterLink} to="/register" variant="outlined" size="large">
                  Crear cuenta
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} aria-hidden="true">
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, maxWidth: 420, mx: 'auto' }}>
                {heroTiles.map(({ Icon, tone }, index) => (
                  <Box
                    key={tone}
                    sx={{
                      bgcolor: candyTones[tone].bg,
                      color: candyTones[tone].fg,
                      aspectRatio: '1',
                      borderRadius: index % 2 === 0 ? '40% 60% 55% 45%' : '55% 45% 40% 60%',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    <Icon sx={{ fontSize: 64 }} />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="categorias" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <SectionTitle title="Nuestras categorías" text="Encuentra el antojo perfecto." />
          <Grid container spacing={3}>
            {categories.map(({ id, name, text, Icon, tone }) => (
              <Grid key={id} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        bgcolor: candyTones[tone].bg,
                        color: candyTones[tone].fg,
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        display: 'grid',
                        placeItems: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      <Icon fontSize="large" />
                    </Box>
                    <Typography variant="h6" component="h3">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="productos" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <SectionTitle title="Los favoritos de la casa" text="Lo más pedido por nuestros clientes." />
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="nosotros" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <SectionTitle title="¿Por qué Dulce Antojo?" text="Cuidamos cada detalle, de la cocina a tu mesa." />
          <Grid container spacing={4}>
            {features.map(({ title, text, Icon }) => (
              <Grid key={title} size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
                <Icon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" component="h3" gutterBottom>
                  {title}
                </Typography>
                <Typography color="text.secondary">{text}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Tu primer pedido tiene sorpresa
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Crea tu cuenta gratis y empieza a endulzar tus días.
          </Typography>
          <Button component={RouterLink} to="/register" variant="contained" size="large">
            Registrarme
          </Button>
        </Container>
      </Box>
    </main>
    <Footer />
  </>
)
export default Landing
