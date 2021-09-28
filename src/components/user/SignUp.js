import React from 'react'
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../../firebase.js";
import { useHistory } from "react-router-dom";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    function onSignin() {
        history.push('/signin')
    }
    const register = (e) => {
        e.preventDefault();
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };

    useEffect(() => {
        if (loading) return;
        if (user) history.replace("/dashboard");
    }, [user, loading, history]);

    return <div className="form">
        <h1>Sign Up</h1>
        <form className="form-page">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name..." />
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password..." />
            <label>Confirm Password</label>
            <input type="password" placeholder="Password..." />
        </form>
        <div className="btn-container">
            <button className="form-btn" onClick={(e) => register(e)}> Sign Up</button>
            <button className="form-btn" onClick={() => signInWithGoogle(email, password)}> Sign Up with Google</button>
        </div>
        <p>Already have an account? <span className="sign-btn" onClick={onSignin}>Sign in!</span></p>

    </div>
};

export default SignUp;