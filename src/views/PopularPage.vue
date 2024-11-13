<template>
    <div class="popular-page">
        <h1>대세 콘텐츠</h1>
        <div class="movie-results">
            <MovieCard
                v-for="movie in popularMovies"
                :key="movie.id"
                :movie="movie"
            />
        </div>
    </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
import { fetchPopularMovies } from '@/services/api'; // 인기 영화 데이터를 가져오는 API 함수

export default {
    name: 'PopularPage',
    components: { MovieCard },
    data() {
        return {
            popularMovies: [], // 인기 영화 목록
        };
    },
    async created() {
        this.popularMovies = await fetchPopularMovies(); // 인기 영화 데이터를 로드
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
}

.movie-results {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
