<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/main_icon.png" alt="홈 아이콘" class="icon" />
            <span>My Movie App</span>
        </div>
        <nav class="nav-links">
            <router-link to="/" class="nav-item">홈</router-link>
            <router-link to="/popular" class="nav-item"
                >대세 콘텐츠</router-link
            >
            <router-link to="/search" class="nav-item">찾아보기</router-link>
            <router-link to="/wishlist" class="nav-item"
                >내가 찜한 리스트</router-link
            >
        </nav>

        <div class="login-container">
            <span v-if="nickname" class="nickname">{{ nickname }}님</span>

            <button
                @click="
                    $emit('show-login');
                    
                    console.log('Login button clicked!');
                "
                class="login-button"
            >
                <img
                    :src="profile_image_url || require('@/assets/login.png')"
                    alt="프로필 이미지"
                    class="profile_image"
                />
            </button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            nickname: localStorage.getItem('nickname') || '', // 닉네임 가져오기
            profile_image_url: localStorage.getItem('profile_image_url') || '',
        };
    },
    methods: {
        updateNickname() {
            this.nickname = localStorage.getItem('nickname') || '';
            this.profile_image_url =
                localStorage.getItem('profile_image_url') || '';
        },
    },
    mounted() {
        // 로그인 상태 감시 및 업데이트
        window.addEventListener('storage', this.updateNickname);
    },
    beforeUnmount() {
        window.removeEventListener('storage', this.updateNickname);
    },
};
</script>

<style scoped>
.header {
    position: fixed; /* 스크롤을 따라오도록 고정 */
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    background-color: #222; /* 더 진한 검정색 */
    color: #ffcc00;
    z-index: 1000; /* 다른 콘텐츠 위에 표시되도록 설정 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 살짝 그림자 추가 */
}
.logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
}

.icon {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
}

.nav-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin-left: 1rem; /* 왼쪽으로 정렬된 느낌을 줌 */
}

.nav-item {
    color: #ffcc00;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.login-button {
    background-color: #222;
    border: none;
    padding: 0.5rem 1rem;
    color: #222;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
}

.login-button:hover {
    background-color: #555;
}
.login_icon {
    width: 60px;
    height: 60px;
}
.profile_image {
    margin-top: 10px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
}
</style>
