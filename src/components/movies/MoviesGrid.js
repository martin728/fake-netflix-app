import React, { useEffect, useState } from 'react';
import MovieTile from './MovieTile'
import { auth } from "../../firebase.js";
import { getDefaultMovies } from '../../services/tvmaze-service'
import { useAuthState } from 'react-firebase-hooks/auth';
import { getFavMoviesForUser } from '../../firebase.js';

const MoviesGrid = () => {

    const [movies, setMovies] = useState([]);
    const [user] = useAuthState(auth);

    function sortByAlph() {
        getDefaultMovies().then(movies => setMovies(movies.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        })))
    }
    function sortByRating() {

        getDefaultMovies().then(movies => setMovies(movies.sort(function (a, b) {
            if (a.rating.average < b.rating.average) {
                return 1;
            }
            if (a.rating.average > b.rating.average) {
                return -1;
            }
            return 0;
        })))

    }
    function sortByDate() {
        getDefaultMovies().then(movies => setMovies(movies.slice().sort(function (a, b) {
            if (a.ended < b.ended) {
                return 1;
            }
            if (a.ended > b.ended) {
                return -1;
            }
            return 0;
        })))

    }


    useEffect(() => {

        if (user) {
            getFavMoviesForUser(user.uid).then((document) => {
                let selected = [];
                document.docs.map(doc => selected.push(doc.data().movieId));
                getDefaultMovies().then(movies => {
                    movies.forEach(mv => {
                        mv.favourite = selected.includes(mv.id)
                    });
                    setMovies(movies)
                })
            })
        } else {
            // getDefaultMovies().then(movies => setMovies(movies))
        }

    }, [user])

    return (
        <div className="movie-container">
            <div className="header-bg"></div>
            <div className="sort-btns">
                <button className="form-btn" onClick={sortByAlph}>Sort by alphabet</button>
                <button className="form-btn" onClick={sortByRating}>Sort by rating</button>
                <button className="form-btn" onClick={sortByDate}>Sort by date</button>
            </div>
            <div className="movie-grid">
                {movies.length > 0 && movies.map(movie => (
                    <MovieTile key={movie?.id} {...movie} />
                ))}
            </div>
        </div>
    )
};

export default MoviesGrid;