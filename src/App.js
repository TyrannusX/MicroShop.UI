import { AppBar, Box, Button, Container, Menu, Toolbar, Tooltip, Typography } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './landing/Landing';
import Product from './products/Product';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "/products",
      element: <Product />
    },
  ]);

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="x1">
          <Toolbar disableGutters>  
              {/*Logo title section*/}
              <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>MicroShop</Typography>

              {/*Menu options section*/}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button href="/" sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
                <Button href="/products" sx={{ my: 2, color: 'white', display: 'block' }}>Products</Button>
              </Box>

              {/*User account section*/}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Settings">
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>Settings</Button>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                >
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>Log In</Button>
                </Menu>
              </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
