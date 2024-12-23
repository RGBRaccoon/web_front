<template>
    <div class="modal">
        <div class="modal-content">
            <button class="close-button" @click="$emit('close')">
                &times;
            </button>
            <h2>로그인</h2>
            <form @submit.prevent="handleLogin">
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
                    <label for="password">비밀번호</label><br />
                    <input
                        type="password"
                        v-model="password"
                        class="styled-input"
                        required
                    />
                </div>
                <br />
                <button type="submit" class="submit-button">로그인</button>
                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </form>
            <p @click="$emit('switch-to-signup')" class="toggle-link">
                회원가입
            </p>
            <!-- 카카오 로그인 버튼 추가 -->
            <button @click="loginWithKakao" class="kakao-button">
                카카오 로그인
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginModal',
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
        };
    },
    methods: {
        handleLogin() {
            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
            const user = storedUsers.find(
                (u) => u.email === this.email && u.password === this.password
            );
            if (user) {
                // 로그인 성공
                alert('로그인 성공');
                console.log('로그인 성공');
                localStorage.setItem('isLoggedIn', true); // 로그인 상태 저장
                localStorage.setItem('currentUser', JSON.stringify(user)); // 현재 사용자 저장
                this.$emit('close'); // 모달 닫기
            } else {
                this.errorMessage = '아이디 또는 비밀번호가 잘못되었습니다.';
            }
        },
        loginWithKakao() {
            window.Kakao.Auth.login({
                success: (authObj) => {
                    console.log('로그인 성공:', authObj);
                    window.Kakao.API.request({
                        url: '/v2/user/me',
                        success: (res) => {
                            console.log('사용자 정보:', res);
                            const nickname = res.kakao_account.profile.nickname;
                            const profile_image_url =
                                res.kakao_account.profile.profile_image_url;
                            localStorage.setItem('nickname', nickname);
                            localStorage.setItem(
                                'profile_image_url',
                                profile_image_url
                            );
                            localStorage.setItem('isLoggedIn', true);
                            alert(`${nickname}님 환영합니다!`);
                            this.$emit('close'); // 모달 닫기
                        },
                        fail: (error) => {
                            console.error('사용자 정보 요청 실패:', error);
                        },
                    });
                },
                fail: (err) => {
                    console.error('카카오 로그인 실패:', err);
                },
            });
        },
    },
};
</script>

<style scoped>
@import '@/styles/modal.css'; /* 공통 스타일 임포트 */

.kakao-button {
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #fee500;
    border: none;
    border-radius: 5px;
    color: #3c1e1e;
    font-weight: bold;
    cursor: pointer;
}

.kakao-button:hover {
    background-color: #ffd900;
}
</style>
