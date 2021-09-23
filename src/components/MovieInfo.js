import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const INFO_API = 'https://api.tvmaze.com/shows/';

const MovieInfo = () => {
    let { id } = useParams();
    const [movie, setMovies] = useState([]);
    useEffect(() => {
        fetch(INFO_API + id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data);
            })
    }, [])

    return (
        <div className="movie-description">
            <div className="movie-picture">
                <h1>{movie?.name}</h1>
                <img src={movie?.image?.medium} alt="img" />
            </div>
            <div className="movies-info">
                <p><b>Genres</b>: {(movie?.genres)?.join(', ')}</p>
                <p><b>Premiere</b>: {movie?.ended}</p>
                <p><b>Language</b>: {movie?.language}</p>
                <p><b>Runtime</b>: {movie?.averageRuntime}</p>
                <p><b>Rating</b>: {movie?.rating?.average}</p>
            </div>
        </div>
    )
};

export default MovieInfo;