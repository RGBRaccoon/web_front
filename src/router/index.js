import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Search from '@/views/SearchPage.vue';
const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: Home,
    },
    {
        path: '/search',
        name: 'SearchPage',
        component: Search,
    },
    // 다른 라우트 추가 가능
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
