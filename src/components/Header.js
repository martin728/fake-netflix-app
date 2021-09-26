import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoginBtn from './buttons/LoginBtn.js'
import LogoutBtn from './buttons/LogoutBtn.js'
import { searchMoviesByTerm } from '../services/tvmaze-service'
import { auth } from "../firebase.js";
import { useHistory } from 'react-router-dom';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [user] = useAuthState(auth);
    const history = useHistory();

    const handleOnSubmit = (e) => {
        e.preventDefault()
        history.push('/movies/search/' + searchTerm)
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }
    function onMainPage() {
        history.push('/')
    }

    return <div>
        <header className="logo">
            <h3 className="logo-text" onClick={onMainPage} >FakeNetflix</h3>
            < form onSubmit={handleOnSubmit} >
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
    </div>
};

export default Header;