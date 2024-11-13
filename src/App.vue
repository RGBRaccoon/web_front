<template>
    <div id="app">
        <HeaderComponent />
        <!-- 모든 페이지에 표시될 헤더 컴포넌트 -->
        <router-view />
        <!-- 라우터에 따른 페이지 렌더링 영역 -->
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
    name: 'App',
    components: {
        HeaderComponent, // 전역 헤더 추가
    },
};
</script>

<style>
/* 기본 스타일 설정 */
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #ffcc00; /* 노랑 테마 색상 */
    background-color: #333; /* 검정 테마 배경색 */
}
</style>
