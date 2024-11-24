<template>
    <div class="modal">
        <div class="modal-content">
            <button class="close-button" @click="$emit('close')">
                &times;
            </button>
            <h2>회원가입</h2>
            <form @submit.prevent="handleSignup">
                <div class="form-group">
                    <label for="username">아이디</label><br />
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
                <div class="form-group">
                    <label for="confirmPassword">비밀번호 확인</label><br />
                    <input
                        type="password"
                        v-model="confirmPassword"
                        class="styled-input"
                        required
                    />
                </div>
                <button type="submit" class="submit-button">회원가입</button>
                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </form>
            <p @click="$emit('switch-to-login')" class="toggle-link">로그인</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignupModal',
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
            errorMessage: '',
        };
    },
    methods: {
        handleSignup() {
            if (this.password !== this.confirmPassword) {
                this.errorMessage = '비밀번호가 일치하지 않습니다.';
            } else {
                alert('회원가입 성공');
                this.$emit('close');
            }
        },
    },
};
</script>

<style scoped>
@import '@/styles/modal.css'; /* 공통 스타일 임포트 */
</style>
