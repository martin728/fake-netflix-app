import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoginBtn from './buttons/LoginBtn.js'
import MyAccountBtn from './buttons/MyAccountBtn'
import LogoutBtn from './buttons/LogoutBtn'
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
            <div className="header-right">
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
                {user ? <MyAccountBtn /> : ''}
            </div>
        </header>
    </div>
};

export default Header;