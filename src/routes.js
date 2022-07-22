import AddGoods from "./components/AddGoods";
import Login from "./components/AuthPage/Login";
import Register from "./components/AuthPage/Register";
import Profile from "./components/Profile";
import EditGoods from "./components/EditGoods";


export const additionalRoutes = [
    {
        path: '/editGood/:itemId',
        Component: EditGoods
    },
]
export const authRoutes = [
    {
        title: 'Add Goods',
        path: '/addGoods',
        Component: AddGoods
    },
    {
        title: 'Profile',
        path: '/profile/',
        Component: Profile
    },
]
export const publicRoutes = [
    {
        title: 'Login',
        path: '/login',
        Component: Login
    },
    {
        title: 'Register',
        path: '/register',
        Component: Register
    },
]
