import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorite': favorite,
};

export default routes;
