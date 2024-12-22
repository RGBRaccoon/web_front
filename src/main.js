import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // router 불러오기

const app= createApp(App)
app.use(router); // router 사용하기
const kakaoKey = process.env.VUE_APP_KAKAO_JS_KEY;
if (!window.Kakao.isInitialized()) {
    window.Kakao.init(kakaoKey);
    console.log('Kakao SDK 초기화 완료:', window.Kakao.isInitialized());
}

app.mount('#app');