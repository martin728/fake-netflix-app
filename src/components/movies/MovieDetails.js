import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../services/tvmaze-service'


const MovieDetails = () => {
    let clicked = false;
    let { id } = useParams();
    const [movie, setMovies] = useState([]);
    useEffect(() => {
        getMovieById(id).then(data => setMovies(data))
    }, [id])

    return (
        <div className="movie-description">
            <div className="movie-picture">
                <h1>{movie?.name}</h1>
                <img src={movie?.image?.medium} alt="img" />
            </div>
            <div className="movies-info">
                <p><b>Genres</b>: {(movie?.genres)?.join(', ')}</p>
                <p><b>Premiere</b>: {movie?.ended?.split('-').reverse().join('.')}</p>
                <p><b>Language</b>: {movie?.language}</p>
                <p><b>Runtime</b>: {movie?.averageRuntime}</p>
                <p><b>Rating</b>: {movie?.rating?.average}</p>
                <div className="movie-summary">
                    <p><b>Description:</b></p>
                    <div>
                        {(movie?.summary)?.replace('<p>', ' ').replace('</p>', ' ').replace('<b>', ' ').replace('</b>', ' ')}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MovieDetails;