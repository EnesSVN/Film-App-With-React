import React, { useEffect } from 'react'
import useMovies from '../api/useMovies';
import { Link } from 'react-router-dom'

function Home() {

    // custom hook to fetch movies
    const movies = useMovies();

    return (
        <div className="carousel carousel-center rounded gap-4">
            {/* <div class="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
            </div> */}
            {
                movies.map(movie =>
                    <div className="carousel-item flex flex-col" key={movie.id} >
                        <Link to={'/movie/' + movie.id}>
                            <img src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + movie.poster_path} alt="Pizza" />
                            <p>{movie.title}</p>
                        </Link>

                    </div>
                )
            }
        </div >
    )
}

export default Home