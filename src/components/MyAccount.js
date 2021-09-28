import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase.js";
import { getFavMoviesForUser } from '../firebase.js';
import { getMovieById } from '../services/tvmaze-service'
import MovieTile from './movies/MovieTile'


const MyAccount = () => {

    const [user] = useAuthState(auth);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (user) {
            getFavMoviesForUser(user.uid).then((document) => {
                let selected = [];
                document.docs.map(doc => selected.push(doc.data().movieId));
                selected.forEach(el => getMovieById(el).then(movies2 => setMovies(oldArray => [...oldArray, movies2])))
            }).catch((error) => {
                console.log(`Error getting documents: ${error}`);
            });
        }
    }, [user, user?.uid])

    return <div className="my-account">
        <h1>{user?.displayName?.split(' ')[0] ? 'Welcome, ' + user?.displayName?.split(' ')[0] + "!" : ''}</h1>
        <h3>Here is your collection of movies:</h3>
        <div className="movie-container">
            {movies.length > 0 && movies.map(movie => (
                <MovieTile key={movie?.id} {...movie} />
            ))}
        </div>
    </div>
};

export default MyAccount