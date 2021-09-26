import React, { useEffect, useState } from 'react';
import MovieTile from './MovieTile'
import { useHistory } from 'react-router-dom';
import { getDefaultMovies } from '../../services/tvmaze-service'

const MoviesGrid = () => {

    const history = useHistory();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getDefaultMovies().then(movies => setMovies(movies))
    }, [])

    return (
        <div className="movie-container">
            <div className="header-bg"></div>
            {movies.length > 0 && movies.map(movie => (
                <MovieTile key={movie?.id} {...movie} />
            ))}
        </div>
    )
};

export default MoviesGrid;