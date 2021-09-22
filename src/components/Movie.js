import React from 'react'

const Movie = ({ image, name, rating }) => {

    return <div className="movie">
        <img src={image.medium} alt={name} />
        <div className="movie-info">
            <h3>{name}</h3>
            <span>{rating.average}</span>
        </div>
    </div>
};

export default Movie;