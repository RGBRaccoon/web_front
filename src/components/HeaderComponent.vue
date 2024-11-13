<template>
    <header class="header">
      <div class="logo">
        <img src="@/assets/main_icon.png" alt="홈 아이콘" class="icon" />
        <span>My Movie App</span>
      </div>
      <nav class="nav-links">
        <router-link to="/" class="nav-item">홈</router-link>
        <router-link to="/popular" class="nav-item">대세 콘텐츠</router-link>
        <router-link to="/search" class="nav-item">찾아보기</router-link>
        <router-link to="/wishlist" class="nav-item">내가 찜한 리스트</router-link>
      </nav>
      <router-link to="/signin" class="login-link">
        <img src="@/assets/login.png" alt="로그인 아이콘" class="login_icon" />
      </router-link>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
    color: #ffcc00;
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
  
  .login-link {
    display: flex;
    align-items: center;
    margin-left: auto; /* 로그인 아이콘을 헤더의 가장 오른쪽에 배치 */
  }
  
  .login_icon {
    width: 60px;
    height: 60px;
  }
  </style>
  