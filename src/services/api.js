import axios from 'axios';

const apiKey = process.env.VUE_APP_TMDB_API_KEY;
const baseURL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
    try {
        const response = await axios.get(`${baseURL}/movie/popular`, {
            params: {
                api_key: apiKey,
                language: 'ko-KR',
                page: 1,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error('Failed to fetch movies:', error);
        return [];
    }
};
