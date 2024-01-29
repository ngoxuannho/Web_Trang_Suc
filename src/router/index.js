import { DefaultLayout } from '../layouts';
import { Home, Dashboard, Login, Signup, Productslist, Homepages , } from '../pages';
import About from '../pages/about';

export const PuclicRoutes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/login',
        component: Login,
        layout: Login,
        isPrivate: false,
    },
    {
        path: '/about',
        component: About,
        layout: DefaultLayout,
        isPrivate: false,
    },
    {
        path: '/list',
        component: Productslist,
        layout: DefaultLayout,
        isPrivate: false,
    },
   
    {
        path: '/trangchu',
        component: Homepages,
        layout: Homepages,
        isPrivate: false,
    },
    {
        path: '/signup',
        component: Signup,
        layout: Signup,
        isPrivate: false,
    },
   
   
];
export const PrivateRoutes = [
    {
        path: '/admin',
        component: Dashboard,
        layout: DefaultLayout,
        isPrivate: true,
    },
];

