<template>
    <div id="app">
        <HeaderComponent
            @show-login="toggleLoginModal"
            @show-signup="toggleSignupModal"
        />
        <!-- 모든 페이지에 표시될 헤더 컴포넌트 -->
        <div class="main-content">
            <router-view />
        </div>

        <transition name="modal">
            <LoginModal
                v-if="showLoginModal"
                @close="toggleLoginModal"
                @switch-to-signup="switchToSignupModal"
            />
        </transition>

        <transition name="modal">
            <SignupModal
                v-if="showSignupModal"
                @close="toggleSignupModal"
                @switch-to-login="switchToLoginModal"
            />
        </transition>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import LoginModal from '@/components/LoginModal.vue';
import SignupModal from '@/components/SignupModal.vue';

export default {
    name: 'App',
    components: { HeaderComponent, LoginModal, SignupModal },
    data() {
        return {
            showLoginModal: false,
            showSignupModal: false,
        };
    },
    methods: {
        toggleLoginModal() {
            this.showLoginModal = !this.showLoginModal;
        },
        toggleSignupModal() {
            this.showSignupModal = !this.showSignupModal;
        },
        switchToSignupModal() {
            this.toggleLoginModal(); // 로그인 모달 닫기
            setTimeout(() => {
                this.toggleSignupModal(); // 회원가입 모달 열기
            }, 300); // 애니메이션 시간에 맞추어 전환
        },
        switchToLoginModal() {
            this.toggleSignupModal(); // 회원가입 모달 닫기
            setTimeout(() => {
                this.toggleLoginModal(); // 로그인 모달 열기
            }, 300); // 애니메이션 시간에 맞추어 전환
        },
    },
};
</script>

<style>
:root {
    --header-height: 80px;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #ffcc00;
    background-color: #333;
}

.main-content {
    margin-top: var(--header-height);
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
</style>
