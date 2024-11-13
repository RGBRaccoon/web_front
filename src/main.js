import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // router 불러오기

createApp(App).use(router).mount('#app'); // router 사용하기
