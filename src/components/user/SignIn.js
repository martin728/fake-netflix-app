import { React, useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../firebase.js";

const SignIn = () => {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    console.log(user)
    function onSignup() {
        history.push('/signup')
    }
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) history.replace("/");
    }, [user, loading, history]);


    return <div className="form">
        <h1>Sign In</h1>
        <form className="form-page">
            <label>Email</label>
            <input type="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
        </form>
        <div className="btn-container">
            <button className="form-btn" onClick={(btn) => signInWithEmailAndPassword(btn, email, password)}>Sign In</button>
            <button className="form-btn" onClick={() => signInWithGoogle(email, password)}>Sign In with Google</button>
        </div>
        <p>Doesn`t have an account? <span className="sign-btn" onClick={onSignup}>Sign up!</span></p>
    </div>
};

export default SignIn;