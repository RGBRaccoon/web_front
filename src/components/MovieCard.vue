<template>
    <div class="movie-card">
        <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.title"
        />
        <h2>{{ movie.title }}</h2>
        <button @click="toggleWishlist">찜하기</button>
        <p>{{ movie.overview }}</p>
    </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        movie: Object,
    },
    methods: {
        toggleWishlist() {
            let wishlist = JSON.parse(
                sessionStorage.getItem('wishlist') || '[]'
            );

            const movieIndex = wishlist.findIndex(
                (item) => item.id === this.movie.id
            );
            if (movieIndex === -1) {
                wishlist.push(this.movie); // 영화가 찜 리스트에 없다면 추가
            } else {
                wishlist.splice(movieIndex, 1); // 이미 찜 리스트에 있다면 제거
            }

            sessionStorage.setItem('wishlist', JSON.stringify(wishlist)); // 세션 스토리지에 저장
            this.$emit('update-wishlist', wishlist); // 부모 컴포넌트에 업데이트 알림
        },
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
