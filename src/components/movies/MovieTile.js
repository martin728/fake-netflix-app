import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { addDataToCollection } from '../../firebase.js'
import { auth } from "../../firebase.js";
import { useAuthState } from 'react-firebase-hooks/auth';

const MovieTile = ({ image, name, rating, id }) => {
    const history = useHistory();
    const [user] = useAuthState(auth);
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    function sendDataToCollection() {
        let obj = {
            userId: user.uid,
            movieId: id
        }
        addDataToCollection(obj);
        toggleClass()
    }

    return <div onClick={() => history.push('/movies/' + id)} className="movie">
        <button className="like-btn isActive ? clicked : null" onClick={sendDataToCollection}>♥</button>
        <img src={image?.medium ? image?.medium : 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'} alt={name} />
        < div className="movie-info">
            <h3>{name}</h3>
            <span>{rating?.average ? rating?.average : 'N/A'}</span>
        </div>
    </div>
};

export default MovieTile;