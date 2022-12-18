import React, { useEffect, useState } from 'react'
import { getPopularMovies } from './tmdb.service'

const useMovies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getPopularMovies().then(movies => setMovies(movies.results))
    }, [])

    return movies
}

export default useMovies