import axios from 'axios';

const apiKey = process.env.VUE_APP_TMDB_API_KEY;
const baseURL = 'https://api.themoviedb.org/3';

const fetchMovies = async (endpoint, params = {}) => {
    try {
        const response = await axios.get(`${baseURL}${endpoint}`, {
            params: {
                api_key: apiKey,
                language: 'ko-KR',
                ...params, // 추가 파라미터 병합
            },
        });
        console.log(`Response from ${endpoint}:`, response.data); // 응답 로그 출력
        return response.data;
    } catch (error) {
        console.error(
            `Failed to fetch from ${endpoint}:`,
            error.response || error.message
        );
        return { results: [] }; // 빈 결과 반환
    }
};
export const fetchPopularMovies = () => fetchMovies('/movie/popular');

// 최신 영화
export const fetchNewMovies = () => fetchMovies('/movie/now_playing');

export const fetchMoviesByGenre = (genreId) =>
    fetchMovies('/discover/movie', { with_genres: genreId });

export default {
    fetchMovies,
    fetchPopularMovies,
    fetchNewMovies,
    fetchMoviesByGenre,
};
