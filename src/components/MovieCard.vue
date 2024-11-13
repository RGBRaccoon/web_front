<template>
    <div class="movie-card">
        <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.title"
        />
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.overview }}</p>
    </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        movie: Object,
    },
};
</script>

<style scoped>
.movie-card {
    width: 200px;
    background-color: #333;
    color: #ffcc00;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
}

.movie-card img {
    width: 100%;
}

.movie-card h2 {
    font-size: 1.1rem;
    margin: 0.5rem 0;
}

.movie-card p {
    font-size: 0.9rem;
    padding: 0 0.5rem;
}
</style>
