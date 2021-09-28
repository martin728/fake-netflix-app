import React, { useEffect, useState } from 'react';
import MovieTile from './MovieTile'
import { searchMoviesByTerm } from '../../services/tvmaze-service'
import { useParams } from 'react-router-dom';

const MoviesSearchGrid = () => {
    let { query } = useParams();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMoviesByTerm(query).then(movies => setMovies(movies))
    }, [query])

    return (
        <div className="movie-container">
            {movies.length > 0 && movies.map(movie => (
                <MovieTile key={movie?.id} {...movie} />
            ))}
        </div>
    )
};

export default MoviesSearchGrid;