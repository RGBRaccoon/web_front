import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Search from '@/views/SearchPage.vue';
import Popular from '@/views/PopularPage.vue';
import Wishlist from '@/views/WishlistPage.vue';
const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: Home,
        meta: { requiresAuth: true },
    },
    {
        path: '/search',
        name: 'SearchPage',
        component: Search,
    },
    {
        path: '/popular',
        name: 'PopularPage',
        component: Popular,
    },
    {
        path: '/wishlist',
        name: 'WishlistPage',
        component: Wishlist,
    },
    // 다른 라우트 추가 가능
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
