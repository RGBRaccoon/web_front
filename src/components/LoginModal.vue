<template>
    <div class="modal">
        <div class="modal-content">
            <button class="close-button" @click="$emit('close')">
                &times;
            </button>
            <h2>로그인</h2>
            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="username">아이디</label>
                    <br />
                    <input
                        type="text"
                        v-model="username"
                        class="styled-input"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="password">비밀번호</label><br />
                    <input
                        type="password"
                        v-model="password"
                        class="styled-input"
                        required
                    />
                </div>
                <button type="submit" class="submit-button">로그인</button>
                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </form>
            <p @click="$emit('switch-to-signup')" class="toggle-link">
                회원가입
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginModal',
    data() {
        return {
            username: '',
            password: '',
            errorMessage: '',
        };
    },
    methods: {
        handleLogin() {
            // 로그인 로직 (예시)
            if (this.username === 'user' && this.password === 'password') {
                alert('로그인 성공');
                this.$emit('close');
            } else {
                this.errorMessage = '아이디 또는 비밀번호가 잘못되었습니다.';
            }
        },
    },
};
</script>

<style scoped>
@import '@/styles/modal.css'; /* 공통 스타일 임포트 */
</style>
