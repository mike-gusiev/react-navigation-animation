import Start from './pages/Start/Start';
import Favorites from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import Orders from './pages/Orders/Orders';
import SignOut from './pages/Auth/SignOut/SignOut';

export const routes = [
  {
    link:'/start',
    name:'Start',
    Component: Start,
  },
  {
    link: '/cart',
    name: 'Your Cart',
    Component: Cart,
  },
  {
    link: '/favorites',
    name: 'Favorites',
    Component: Favorites,
  },
  {
    link: '/orders',
    name: 'Your Orders',
    Component: Orders,
  },
  {
    link: '/signout',
    name: 'Sign Out',
    Component: SignOut,
  },
];
