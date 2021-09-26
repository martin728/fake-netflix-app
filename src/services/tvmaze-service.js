
const SHOW_API = 'https://api.tvmaze.com/shows';
const SEARCH_API = 'https://api.tvmaze.com/search/shows?q='
const INFO_API = 'https://api.tvmaze.com/shows/';

const getDefaultMovies = () => {
    return fetch(SHOW_API).then(res => res.json())
}

const getMovieById = (id) => {
    return fetch(INFO_API + id).then(res => res.json())
}

const searchMoviesByTerm = (searchTerm) => {
    return fetch(SEARCH_API + searchTerm).then(res => res.json()).then(res => res.map(movie => (movie.show)))
}

export {
    getDefaultMovies,
    getMovieById,
    searchMoviesByTerm
};