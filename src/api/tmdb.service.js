
export const getPopularMovies = () => fetch("https://tmdb-api-production.up.railway.app/api/movie/popular").then(res => res.json())