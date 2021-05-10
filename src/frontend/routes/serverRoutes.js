import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import Player from '../pages/player';

const serverRoutes = (isLogged) => {
  return [
    {
      exact: true,
      path: '/',
      component: Home,
    },
    {
      exact: true,
      path: '/log-in',
      component: Login,
    },
    {
      exact: true,
      path: '/sing-up',
      component: Register,
    },
    {
      exact: true,
      path: '/player/:id',
      component: Player,
    },
  ];
};

export default serverRoutes;
