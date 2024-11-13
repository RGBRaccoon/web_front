<template>
    <div class="wishlist-page">
        <h1>내가 찜한 리스트</h1>
        <div class="movie-results">
            <MovieCard
                v-for="movie in wishlist"
                :key="movie.id"
                :movie="movie"
            />
        </div>
    </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';

export default {
    name: 'WishlistPage',
    components: { MovieCard },
    data() {
        return {
            wishlist: [],
        };
    },
    created() {
        // 세션 스토리지에서 찜한 영화 목록 가져오기
        const savedWishlist = sessionStorage.getItem('wishlist');
        this.wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];
    },
};
</script>

<style scoped>
.wishlist-page {
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
