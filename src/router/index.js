import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import("@/pages/Home");
const About = () => import("@/pages/About");
const Catalog = () => import("@/pages/Catalog");
const WishList = () => import("@/pages/WishList");
const Cart = () => import("@/pages/Cart");
const Product = () => import("@/pages/Product");
const Checkout = () => import("@/pages/Checkout");
const NotFound = () => import("@/pages/NotFound");
const Thanks = () => import("@/pages/Thanks");
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about/:aboutRouter',
        name: 'About',
        component: About
    },
    {
        path: '/catalog/:catalogItem',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/wishlist',
        name: 'Wishlist',
        component: WishList
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: Product
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/thanks',
        name: 'Thanks',
        component: Thanks
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        window.scrollTo(0, 0);
    }
})

export default router
