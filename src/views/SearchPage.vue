<template>
    <div class="search-page">
        <h1>영화 검색</h1>

        <div class="filters">
            <!-- 장르 선택 -->
            <div class="filter">
                <label for="genre">장르</label>
                <select v-model="selectedGenre" @change="applyFilters">
                    <option value="">모든 장르</option>
                    <option
                        v-for="genre in genres"
                        :key="genre.id"
                        :value="genre.id"
                    >
                        {{ genre.name }}
                    </option>
                </select>
            </div>

            <!-- 평점 선택 -->
            <div class="filter">
                <label for="rating">평점</label>
                <select v-model="selectedRating" @change="applyFilters">
                    <option value="">모든 평점</option>
                    <option
                        v-for="rating in ratings"
                        :key="rating"
                        :value="rating"
                    >
                        {{ rating }}
                    </option>
                </select>
            </div>

            <!-- 언어 선택 -->
            <div class="filter">
                <label for="language">언어</label>
                <select v-model="selectedLanguage" @change="applyFilters">
                    <option value="">모든 언어</option>
                    <option
                        v-for="language in languages"
                        :key="language.code"
                        :value="language.code"
                    >
                        {{ language.name }}
                    </option>
                </select>
            </div>
            <button @click="resetFilters" class="reset-button">초기화</button>
        </div>
        <!-- 필터 적용 후 영화 목록 -->
        <div class="movie-results">
            <MovieCard
                v-for="movie in filteredMovies"
                :key="movie.id"
                :movie="movie"
            />
        </div>
    </div>
</template>

<script>
import { fetchPopularMovies } from '@/services/movieService';
import MovieCard from '@/components/MovieCard.vue';

export default {
    name: 'SearchPage',
    components: { MovieCard },
    data() {
        return {
            selectedGenre: '',
            selectedRating: '',
            selectedLanguage: '',
            genres: [
                { id: 28, name: 'Action' },
                { id: 35, name: 'Comedy' },
                { id: 18, name: 'Drama' },
                // 추가 장르
            ],
            ratings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            languages: [
                { code: 'en', name: 'English' },
                { code: 'ko', name: 'Korean' },
                { code: 'ja', name: 'Japanese' },
                // 추가 언어
            ],
            movies: [],
            filteredMovies: [],
        };
    },
    async created() {
        const popularData = await fetchPopularMovies();
        console.log('Popular Movies Response:', popularData.results);
        this.movies = popularData.results || [];
        this.filteredMovies=this.movies;
    },
    methods: {
        applyFilters() {
            this.filteredMovies = this.movies.filter((movie) => {
                const matchesGenre = this.selectedGenre
                    ? movie.genre_ids.includes(parseInt(this.selectedGenre))
                    : true;
                const matchesRating = this.selectedRating
                    ? movie.vote_average >= this.selectedRating
                    : true;
                const matchesLanguage = this.selectedLanguage
                    ? movie.original_language === this.selectedLanguage
                    : true;
                return matchesGenre && matchesRating && matchesLanguage;
            });
        },
        resetFilters() {
            this.selectedGenre = '';
            this.selectedRating = '';
            this.selectedLanguage = '';
            this.filteredMovies = this.movies; // 초기 상태로 필터링을 해제
        },
    },
};
</script>

<style scoped>
.search-page {
    width: 100vw;
    min-height: 100vh;
    padding: 2rem;
    box-sizing: border-box;
    background-color: #333;
    color: #ffcc00;
}

.filters {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;
}

.filter {
    display: flex;
    flex-direction: column;
}

.reset-button {
    background-color: #ffcc00;
    color: #333;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 2rem;
}

.reset-button:hover {
    background-color: #ffd700;
}

.movie-results {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
