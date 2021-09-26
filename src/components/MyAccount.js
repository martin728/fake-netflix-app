import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase.js";

const MyAccount = () => {
    const [user] = useAuthState(auth);

    return <div className="my-account">
        <h1>{user?.displayName?.split(' ')[0] ? 'Welcome, ' + user?.displayName?.split(' ')[0] + "!" : ''}</h1>
    </div>
};

export default MyAccount