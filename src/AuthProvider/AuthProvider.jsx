/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext()
    
    const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null)
        const createNewUser = (email, pass) => createUserWithEmailAndPassword(auth, email, pass)
        

        const logIn = (email, pass) => signInWithEmailAndPassword(auth, email, pass)
        const logOut =async ()=>{
            try {
                return await signOut(auth);
            } catch (error) {
                return console.log("ERROR", error);
            }
        }
        const authInfo = {user, setUser, createNewUser, logIn, logOut}

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => setUser(currentUser))
            return () => unsubscribe()
        },[])

    return <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    }


export default AuthProvider;