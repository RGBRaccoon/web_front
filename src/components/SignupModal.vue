<template>
    <div class="modal">
        <div class="modal-content">
            <button class="close-button" @click="$emit('close')">
                &times;
            </button>
            <h2>로그인</h2>
            <form @submit.prevent="handleSignup">
                <div class="form-group">
                    <label for="email">이메일</label><br />
                        <input
                            type="email"
                        v-model="email"
                        class="styled-input"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="password">비밀번호</label>
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
            email: '',
            password: '',
            confirmPassword: '',
            errorMessage: '',
        };
    },
    methods: {
        handleSignup() {
            if (this.password !== this.confirmPassword) {
                this.errorMessage = '비밀번호가 일치하지 않습니다.';
                return;
            }
            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

            // 이메일 중복 확인
            if (storedUsers.some((u) => u.email === this.email)) {
                this.errorMessage = '이미 존재하는 이메일입니다.';
                return;
            }

            // 새 사용자 추가
            const newUser = { email: this.email, password: this.password };
            storedUsers.push(newUser);

            // localStorage에 사용자 저장
            localStorage.setItem('users', JSON.stringify(storedUsers));

            alert('회원가입 성공!');
            this.$emit('close'); // 모달 닫기
        },
    },
};
</script>

<style scoped>
@import '@/styles/modal.css'; /* 공통 스타일 임포트 */
</style>
