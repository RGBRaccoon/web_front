<template>
    <div class="popular-page" @scroll="handleScroll">
        <h1>대세 콘텐츠</h1>
        <div class="movie-results">
            <MovieCard
                v-for="movie in popularMovies"
                :key="movie.id"
                :movie="movie"
            />
        </div>
        <div v-if="loading" class="loading">로딩 중...</div>
    </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
import { fetchPopularMoviesByPage } from '@/services/movieService';

export default {
    name: 'PopularPage',
    components: { MovieCard },
    data() {
        return {
            popularMovies: [], // 인기 영화 목록
            currentPage: 1, // 현재 페이지 번호
            totalPages: null, // 총 페이지 수 (API 응답에서 가져옴)
            loading: false, // 로딩 상태
        };
    },
    async created() {
        await this.loadMovies(); // 초기 데이터 로드
        window.addEventListener('scroll', this.handleScroll); // 스크롤 이벤트 추가
    },
    beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll); // 컴포넌트 해제 시 이벤트 제거
    },
    methods: {
        async loadMovies() {
            if (this.loading || (this.totalPages && this.currentPage > this.totalPages)) {
                // 로딩 중이거나 더 이상 로드할 데이터가 없을 때 중단
                return;
            }
            this.loading = true; // 로딩 시작
            try {
                const data = await fetchPopularMoviesByPage(this.currentPage);
                this.popularMovies = [...this.popularMovies, ...data.results]; // 기존 영화 목록에 추가
                this.totalPages = data.total_pages; // 총 페이지 수 설정
                this.currentPage++; // 다음 페이지로 이동
                console.log(this.currentPage)
            } catch (error) {
                console.error('Failed to fetch movies:', error);
            } finally {
                this.loading = false; // 로딩 종료
            }
        },
        handleScroll() {
            const scrollContainer = document.documentElement;
            const scrollBottom = scrollContainer.scrollHeight - scrollContainer.scrollTop;
            const windowHeight = window.innerHeight;

            // 스크롤이 하단 100px 이내일 때 데이터를 추가로 로드
            if (scrollBottom - windowHeight < 100) {
                this.loadMovies();
            }
        },
    },
};
</script>

<style scoped>
.popular-page {
    width: 100vw;
    min-height: 100vh;
    padding: 2rem;
    box-sizing: border-box;
    background-color: #333;
    color: #ffcc00;
    overflow-y: auto; /* 스크롤 가능 영역 */
}

.movie-results {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.loading {
    text-align: center;
    color: #ffcc00;
    margin-top: 1rem;
}
</style>
