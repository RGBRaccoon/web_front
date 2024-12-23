# **My Movie App**

## **프로젝트 개요**

My Movie App은 Vue.js를 사용하여 제작된 Netflix 스타일의 영화 추천 및 검색 데모 사이트입니다. TMDB API를 활용하여 최신 영화 정보를 제공하며, 다양한 기능을 통해 사용자 경험을 극대화합니다.

---

## **주요 기능**

1. **메인 페이지**:

    - 인기 영화, 최신 영화, 액션 영화 등 다양한 카테고리로 영화 목록 제공.
    - 영화 카드에 호버 효과 적용.

2. **검색 페이지**:

    - 장르, 평점, 언어 필터링을 통한 영화 검색 기능 제공.

3. **대세 콘텐츠 페이지**:

    - 무한 스크롤을 통해 영화 목록을 동적으로 로드.

4. **찜한 리스트**:

    - 세션 스토리지를 사용하여 사용자가 찜한 영화를 관리.

5. **로그인 및 회원가입**:

    - 모달 창을 통한 사용자 인증.
    - 로그인 및 회원가입 간 전환 기능.

6. **반응형 디자인**:
    - 모바일, 태블릿, 데스크톱에서 최적화된 사용자 경험 제공.

---

## **설치 및 실행**

### **1. 프로젝트 클론**

```bash
git clone https://github.com/your-repository/my-movie-app.git
cd my-movie-app
```

### **2. 의존성 설치**

```bash
npm install
```

### **3. 개발 서버 실행**

```bash
npm run serve
```

-   실행 후 브라우저에서 `http://localhost:8080`으로 접속.

### **4. 빌드**

```bash
npm run build
```

-   `dist` 폴더에 배포용 정적 파일 생성.

---

## **기술 스택**

-   **프론트엔드**:
    -   Vue.js
    -   Vue Router
    -   Axios
-   **스타일링**:
    -   CSS3
    -   Scoped CSS
-   **API**:
    -   TMDB API

---

## **폴더 구조**

```plaintext
src/
├── assets/          # 이미지 및 정적 파일
├── components/      # 재사용 가능한 Vue 컴포넌트
├── router/          # Vue Router 설정
├── services/        # API 호출 관련 함수
├── views/           # 각 페이지의 Vue 컴포넌트
├── App.vue          # 메인 Vue 컴포넌트
├── main.js          # 엔트리 파일
```

---

## **배포**

-   **Netlify**를 통해 배포:
    -   [배포된 사이트 바로가기](https://funny-palmier-68a8bf.netlify.app/)

---

## **추가 정보**

-   **TMDB API 사용**:
    -   TMDB에서 제공하는 영화 데이터와 이미지를 활용.
    -   API Key : env에 저장

---

---

## **제작자**

-   **이름**: [RGBRaccoon]
-   **이메일**: [chldusgh0497@gmail.com]
-   **GitHub**: [https://github.com/RGBRaccoon](https://github.com/RGBRaccoon)
