import { useMemo, useState } from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded'
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded'
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded'
import { products } from './data/products'
import { theme } from './theme/travelTheme'

function App() {
  const [selectedId, setSelectedId] = useState(products[0].id)
  const [cart, setCart] = useState<Record<number, number>>({})

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedId) ?? products[0],
    [selectedId],
  )

  const cartItems = useMemo(
    () =>
      products
        .filter((product) => cart[product.id])
        .map((product) => ({ ...product, quantity: cart[product.id] })),
    [cart],
  )

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  )

  const addToCart = (productId: number) => {
    setCart((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + 1,
    }))
  }

  const removeFromCart = (productId: number) => {
    setCart((current) => {
      const nextQuantity = (current[productId] ?? 0) - 1
      if (nextQuantity <= 0) {
        const { [productId]: _, ...rest } = current
        return rest
      }
      return { ...current, [productId]: nextQuantity }
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background:
            'linear-gradient(105deg, rgba(15,110,140,1) 0%, rgba(12,53,89,1) 60%, rgba(9,35,58,1) 100%)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <FlightTakeoffRoundedIcon />
            <Typography variant="h6">Contoso Travel</Typography>
          </Stack>
          <Chip
            color="secondary"
            label={`Cart Items: ${cartItems.reduce((sum, item) => sum + item.quantity, 0)}`}
          />
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          minHeight: '100vh',
          py: { xs: 3, md: 5 },
          background:
            'radial-gradient(circle at 10% 20%, rgba(165,226,236,0.4), transparent 35%), radial-gradient(circle at 80% 10%, rgba(247,198,116,0.25), transparent 35%)',
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h3" color="primary.main" gutterBottom>
            Curated Adventures, Ready to Book
          </Typography>
          <Typography sx={{ mb: 3, maxWidth: 780 }}>
            Explore handpicked destinations and experiences. Select a product to view details, then add or remove it from your cart.
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 5, lg: 4 }}>
              <Stack spacing={2}>
                {products.map((product) => (
                  <Card
                    key={product.id}
                    onClick={() => setSelectedId(product.id)}
                    sx={{
                      cursor: 'pointer',
                      border: selectedId === product.id ? '2px solid' : '1px solid',
                      borderColor:
                        selectedId === product.id ? 'primary.main' : 'divider',
                      transition: 'transform 220ms ease, box-shadow 220ms ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <CardContent>
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <Box>
                          <Typography variant="h6">{product.name}</Typography>
                          <Typography color="text.secondary">
                            {product.location}
                          </Typography>
                        </Box>
                        <Chip label={product.category} color="primary" variant="outlined" />
                      </Stack>
                      <Stack
                        direction="row"
                        sx={{ mt: 2, justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <Typography sx={{ fontWeight: 600 }}>${product.price}</Typography>
                        <Typography color="text.secondary">{product.rating} rating</Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 7, lg: 5 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {selectedProduct.name}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip label={selectedProduct.location} />
                    <Chip label={selectedProduct.duration} color="secondary" />
                  </Stack>
                  <Typography sx={{ mb: 2 }}>{selectedProduct.description}</Typography>
                  <Typography color="primary.main" sx={{ mb: 2, fontWeight: 600 }}>
                    Highlight: {selectedProduct.highlight}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    ${selectedProduct.price}
                  </Typography>

                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      startIcon={<AddShoppingCartRoundedIcon />}
                      onClick={() => addToCart(selectedProduct.id)}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<RemoveShoppingCartRoundedIcon />}
                      onClick={() => removeFromCart(selectedProduct.id)}
                      disabled={!cart[selectedProduct.id]}
                    >
                      Remove
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, lg: 3 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Shopping Cart
                  </Typography>
                  <Divider sx={{ mb: 1 }} />
                  {cartItems.length === 0 ? (
                    <Typography color="text.secondary">Your cart is empty.</Typography>
                  ) : (
                    <List disablePadding>
                      {cartItems.map((item) => (
                        <ListItem
                          key={item.id}
                          disablePadding
                          secondaryAction={
                            <Typography sx={{ fontWeight: 600 }}>
                              ${item.price * item.quantity}
                            </Typography>
                          }
                          sx={{ py: 1 }}
                        >
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'primary.main' }}>
                              {item.quantity}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={item.name}
                            secondary={`$${item.price} each`}
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}
                  <Divider sx={{ my: 2 }} />
                  <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: 700 }}>Total</Typography>
                    <Typography sx={{ fontWeight: 700 }}>${cartTotal}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
