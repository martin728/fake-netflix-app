import React, { useEffect, useState } from 'react';
import MovieTile from './MovieTile'
import { useHistory } from 'react-router-dom';
import { searchMoviesByTerm } from '../../services/tvmaze-service'
import { useParams } from 'react-router-dom';

const MoviesSearchGrid = () => {
    let { query } = useParams();

    const [movies, setMovies] = useState([]);
    const history = useHistory();

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