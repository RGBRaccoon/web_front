<template>
    <div class="main-page">
        <!-- 로딩 중 표시 -->
        <div v-if="loading" class="loading">
            <p>데이터를 불러오는 중입니다...</p>
        </div>

        <!-- 데이터 로드 후 표시 -->
        <div v-else>
            <!-- 인기 섹션 -->
            <div class="movie-section" v-if="popularMovies.length > 0">
                <h2>인기 영화</h2>
                <div class="movie-list">
                    <MovieCard
                        v-for="movie in popularMovies"
                        :key="movie.id"
                        :movie="movie"
                    />
                </div>
            </div>

            <!-- 최신 섹션 -->
            <div class="movie-section" v-if="newMovies.length > 0">
                <h2>최신 영화</h2>
                <div class="movie-list">
                    <MovieCard
                        v-for="movie in newMovies"
                        :key="movie.id"
                        :movie="movie"
                    />
                </div>
            </div>

            <!-- 액션 섹션 -->
            <div class="movie-section" v-if="actionMovies.length > 0">
                <h2>액션 영화</h2>
                <div class="movie-list">
                    <MovieCard
                        v-for="movie in actionMovies"
                        :key="movie.id"
                        :movie="movie"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    fetchPopularMovies,
    fetchNewMovies,
    fetchMoviesByGenre,
} from '@/services/movieService';
import MovieCard from '@/components/MovieCard.vue';

export default {
    name: 'MainPage',
    components: { MovieCard },
    data() {
        return {
            loading: true, // 로딩 상태 추가
            popularMovies: [],
            newMovies: [],
            actionMovies: [],
        };
    },
    async created() {
        try {
            const popularData = await fetchPopularMovies();
            console.log('Popular Movies Response:', popularData.results);
            this.popularMovies = popularData.results || [];

            const newData = await fetchNewMovies();
            console.log('New Movies Response:', newData);
            this.newMovies = newData.results || [];

            const actionData = await fetchMoviesByGenre(28);
            console.log('Action Movies Response:', actionData);
            this.actionMovies = actionData.results || [];
        } catch (error) {
            console.error('Failed to fetch movie data:', error);
        } finally {
            this.loading = false; // 로딩 상태 업데이트
        }
    },
};
</script>

<style scoped>
.main-page {
    width: 100vw;
    min-height: 100vh;
    padding: 2rem;
    box-sizing: border-box;
    background-color: #333;
    color: #ffcc00;
}

/* 로딩 스타일 */
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1.5rem;
    color: #ffcc00;
}

/* 섹션 스타일 */
.movie-section {
    margin: 2rem 0;
}

.movie-section h2 {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: #ffcc00;
}

.movie-list {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    overflow-x: auto; /* 횡스크롤 활성화 */
    scroll-behavior: smooth; /* 부드러운 스크롤 */
}
.movie-card {
    flex-shrink: 0; /* 스크롤 가능 영역에서 축소 방지 */
}

.movie-list::-webkit-scrollbar {
    height: 8px; /* 스크롤바 높이 설정 */
    background-color: #444; /* 스크롤바 배경색 */
}

.movie-list::-webkit-scrollbar-thumb {
    background-color: #ffcc00; /* 스크롤바 색상 */
    border-radius: 4px; /* 스크롤바 모서리 둥글게 */
}
</style>
