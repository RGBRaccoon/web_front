<template>
    <div
        class="movie-card"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.title"
            class="movie-image"
        />
        <div class="movie-info">
            <h2>{{ movie.title }}</h2>
            <button @click="toggleWishlist" class="wishlist-button">
                <span :class="['icon-star', { active: isWishlisted }]"></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isWishlisted: false,
            isHovered: false,
        };
    },
    mounted() {
        // 컴포넌트 로드시 영화가 찜 목록에 있는지 확인
        const wishlist = JSON.parse(sessionStorage.getItem('wishlist') || '[]');
        this.isWishlisted = wishlist.some((item) => item.id === this.movie.id);
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
                this.isWishlisted = true;
            } else {
                wishlist.splice(movieIndex, 1); // 이미 찜 리스트에 있다면 제거
                this.isWishlisted = false;
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
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
}

.movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.movie-image {
    width: 100%;
    border-radius: 8px 8px 0 0;
}

.movie-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
}

.movie-info h2 {
    font-size: 1rem;
    margin: 0;
    flex-grow: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.wishlist-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0 0.5rem;
}

.icon-star {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: url('/src/assets/star.png') no-repeat center center;
    background-size: cover;
    opacity: 0.5;
    transition: opacity 0.3s ease;
}

.icon-star.active {
    opacity: 1;
    background: url('/src/assets/star.png') no-repeat center center;
    background-size: cover;
}
</style>
