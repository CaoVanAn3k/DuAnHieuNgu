import HomePage from '../../Page/Home/HomePage';
import ShopPage from '../../Page/Shop/ShopPage';
import Header from '../Head/Header';

export const PublicRouter = [
    {
        path: '/',
        component: Header,
    },
    {
        path: '/home',
        component: HomePage,
    },
    {
        path: '/shop',
        component: ShopPage,
    },
];
