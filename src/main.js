import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // router 불러오기

const app = createApp(App);
app.use(router); // router 사용하기
const kakaoKey = process.env.VUE_APP_KAKAO_JS_KEY;

if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init(kakaoKey);
    console.log('Kakao SDK 초기화 완료:', window.Kakao.isInitialized());
} else if (!window.Kakao) {
    console.error('Kakao SDK가 로드되지 않았습니다.');
}

app.mount('#app');
