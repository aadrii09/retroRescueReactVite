import {auth} from './firebaseConfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';


//registrar usuario
export const registerUser = async(email, password)=>{
    try {
       const userCredential = createUserWithEmailAndPassword(auth, email, password);
       return userCredential; 
    } catch (error) {
        throw new Error(error.menssage);
    }
}

// Login user
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
}

// Login google
export const loginGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
}

//logout
export const logout = async ()=>{
    try {
        await signOut(auth);
    } catch (error) {
        console-error(error.menssage);
        throw new Error(error.menssage);
    }
}