import axios from 'axios';

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDViYWQ2NTM3MmQwODhjZGMyMjRmNzhiOTFkNzBjYiIsIm5iZiI6MTc3Nzc3Mjg0OS4wMTMsInN1YiI6IjY5ZjZhOTMxMzU2MDAzYTc1MGQ1N2U5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.We01517L5zBNq2VFTKGAlk600HuwLuBAnsE0qBFn4hc'; 

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: 'application/json' 
    },
    params: {
        language: 'pt-BR' 
    }
});

export const getPopularMovies = async () => {
    const response = await api.get('/movie/popular');
    return response.data.results;
};


export const searchMovies = async (query) => {
    const response = await api.get('/search/movie', {
        params: { query: query }
    });
    return response.data.results;
};

export const getMovieDetails = async (id) => {
    const response = await api.get(`/movie/${id}`);
    return response.data;
};

export default api;