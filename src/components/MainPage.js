import React, { useEffect, useState } from 'react';
import Movie from './Movie'
import LoginBtn from './buttons/LoginBtn.js'
import LogoutBtn from './buttons/LogoutBtn.js'
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase.js";

const SHOW_API = 'https://api.tvmaze.com/shows';
const SEARCH_API = 'https://api.tvmaze.com/search/shows?q='

const MainPage = () => {

    const history = useHistory();
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(SHOW_API)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data);
            })
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(SEARCH_API + searchTerm)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data.map(movie => (movie.show)));
            })

    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="movie-container">
            <header className="logo">
                <h3>FakeNetflix</h3>
                <form onSubmit={handleOnSubmit}>
                    <input
                        className="search"
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
                </form>
                {user ? <LogoutBtn /> : <LoginBtn />}
            </header>
            <div className="header-bg"></div>
            {movies.length > 0 && movies.map(movie => (
                <Movie onClick={() => history.push('movie/:id')} key={movie?.id} {...movie} />
            ))}
        </div>
    )
};

export default MainPage;