<template>
    <div class="home">
        <h1>인기 영화</h1>
        <div class="movies">
            <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
        </div>
    </div>
</template>

<script>
import { fetchMovies } from '@/services/api';
import MovieCard from '@/components/MovieCard.vue';

export default {
    name: 'MainPage',
    components: { MovieCard },
    data() {
        return {
            movies: [],
        };
    },
    async created() {
        this.movies = await fetchMovies();
    },
};
</script>

<style scoped>
.movies {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
