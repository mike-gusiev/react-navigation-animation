import Start from './pages/Start/Start';
import Favorites from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import Orders from './pages/Orders/Orders';
import SignOut from './pages/Auth/SignOut/SignOut';

const GitHubPagesPrefix = '/react-navigation-animation';

export const routes = [
  {
    link: GitHubPagesPrefix + '/start',
    name: 'Start',
    Component: Start,
  },
  {
    link: GitHubPagesPrefix + '/cart',
    name: 'Your Cart',
    Component: Cart,
  },
  {
    link: GitHubPagesPrefix + '/favorites',
    name: 'Favorites',
    Component: Favorites,
  },
  {
    link: GitHubPagesPrefix + '/orders',
    name: 'Your Orders',
    Component: Orders,
  },
  {
    link: GitHubPagesPrefix + '/signout',
    name: 'Sign Out',
    Component: SignOut,
  },
];
