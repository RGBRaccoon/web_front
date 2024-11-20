<template>
    <div id="app">
        <HeaderComponent @show-login="toggleLoginModal" />
        <!-- 모든 페이지에 표시될 헤더 컴포넌트 -->
        <div class="main-content">
            <router-view />
        </div>
        <transition name="modal">
            <!-- 로그인/회원가입 모달 -->
            <div v-if="showLoginModal" class="modal">
                <div class="modal-content">
                    <button class="close-button" @click="toggleLoginModal">
                        &times;
                    </button>
                    <div class="tabs">
                        <button
                            :class="{ active: isLoginTab }"
                            @click="isLoginTab = true"
                            class="tab-button"
                        >
                            로그인
                        </button>
                        <button
                            :class="{ active: !isLoginTab }"
                            @click="isLoginTab = false"
                            class="tab-button"
                        >
                            회원가입
                        </button>
                    </div>
                    <div v-if="isLoginTab">
                        <!-- 로그인 폼 -->
                        <h2>로그인</h2>
                        <form @submit.prevent="handleLogin">
                            <div class="form-group">
                                <label for="username">아이디</label>
                                <input
                                    type="text"
                                    v-model="loginUsername"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label for="password">비밀번호</label>
                                <input
                                    type="password"
                                    v-model="loginPassword"
                                    required
                                />
                            </div>
                            <button type="submit" class="login-submit-button">
                                로그인
                            </button>
                            <p v-if="loginErrorMessage" class="error">
                                {{ loginErrorMessage }}
                            </p>
                        </form>
                    </div>
                    <div v-else>
                        <!-- 회원가입 폼 -->
                        <h2>회원가입</h2>
                        <form @submit.prevent="handleSignup">
                            <div class="form-group">
                                <label for="signupUsername">아이디</label>
                                <input
                                    type="text"
                                    v-model="signupUsername"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label for="signupPassword">비밀번호</label>
                                <input
                                    type="password"
                                    v-model="signupPassword"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword"
                                    >비밀번호 확인</label
                                >
                                <input
                                    type="password"
                                    v-model="confirmPassword"
                                    required
                                />
                            </div>
                            <button type="submit" class="signup-submit-button">
                                회원가입
                            </button>
                            <p v-if="signupErrorMessage" class="error">
                                {{ signupErrorMessage }}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
    name: 'App',
    components: {
        HeaderComponent, // 전역 헤더 추가
    },
    data() {
        return {
            showLoginModal: false,
            isLoginTab: true, // true: 로그인, false: 회원가입
            loginUsername: '',
            loginPassword: '',
            loginErrorMessage: '',
            signupUsername: '',
            signupPassword: '',
            confirmPassword: '',
            signupErrorMessage: '',
            users: [], // 간단한 사용자 데이터 저장
        };
    },
    methods: {
        toggleLoginModal() {
            console.log('Toggling login modal');
            this.showLoginModal = !this.showLoginModal;
        },
        handleLogin() {
            const user = this.users.find(
                (u) =>
                    u.username === this.loginUsername &&
                    u.password === this.loginPassword
            );
            if (user) {
                sessionStorage.setItem('isLoggedIn', true);
                sessionStorage.setItem('username', this.loginUsername);
                this.toggleLoginModal();
            } else {
                this.loginErrorMessage =
                    '아이디 또는 비밀번호가 잘못되었습니다.';
            }
        },
        handleSignup() {
            if (this.signupPassword !== this.confirmPassword) {
                this.signupErrorMessage = '비밀번호가 일치하지 않습니다.';
                return;
            }
            if (this.users.some((u) => u.username === this.signupUsername)) {
                this.signupErrorMessage = '이미 존재하는 아이디입니다.';
                return;
            }
            this.users.push({
                username: this.signupUsername,
                password: this.signupPassword,
            });
            this.isLoginTab = true; // 회원가입 후 로그인 탭으로 이동
            this.signupErrorMessage = '';
            alert('회원가입이 완료되었습니다.');
        },
    },
};
</script>

<style>
:root {
    --header-height: 80px; /* 기본 헤더 높이 */
}
/* 기본 스타일 설정 */
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #ffcc00; /* 노랑 테마 색상 */
    background-color: #333; /* 검정 테마 배경색 */
}

/* 헤더 높이만큼 페이지 전체에 유격을 줌 */
.main-content {
    margin-top: var(--header-height);
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    width: 400px;
    position: relative;
    text-align: center;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
.error {
    color: red;
    margin-top: 1rem;
}

.login-submit-button {
    background-color: #ffcc00;
    color: #333;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
    margin-top: 1rem;
}

.login-submit-button:hover {
    background-color: #ffd700;
}
.tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

.tab-button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #ddd;
    cursor: pointer;
    font-weight: bold;
    margin: 0 0.5rem;
}

.tab-button.active {
    background-color: #ffcc00;
    color: #333;
}

.signup-submit-button,
.login-submit-button {
    background-color: #ffcc00;
    color: #333;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
    margin-top: 1rem;
}

.signup-submit-button:hover,
.login-submit-button:hover {
    background-color: #ffd700;
}
</style>
