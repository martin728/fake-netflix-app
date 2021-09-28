import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { collection, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMrsCVrnvI6TWSuabZaGpBCcDM49IMUN0",
    authDomain: "auth-development-f033b.firebaseapp.com",
    projectId: "auth-development-f033b",
    storageBucket: "auth-development-f033b.appspot.com",
    messagingSenderId: "772765047876",
    appId: "1:772765047876:web:f2420b03f3dc9be830f011"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();



const getFavMoviesForUser = async (userId) => {

    return firebase.firestore().collection('fav-movies')
        .where('userId', '==', userId)
        .get()

}
const addDataToCollection = async (data) => {

    var collection = firebase.firestore().collection('fav-movies');
    return collection.add(data);

}

const signInWithGoogle = async () => {
    try {
        const res = await auth.signInWithPopup(googleProvider);
        const user = res.user;
        const query = await db
            .collection("users")
            .where("uid", "==", user.uid)
            .get();
        if (query.docs.length === 0) {
            await db.collection("users").add({
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const signInWithEmailAndPassword = async (btn, email, password) => {
    btn.preventDefault();

    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection("users").add({
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordResetEmail = async (email) => {
    try {
        await auth.sendPasswordResetEmail(email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {

    auth.signOut();
};

export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
    getFavMoviesForUser,
    addDataToCollection
};