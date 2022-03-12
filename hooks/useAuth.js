import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import * as Google from "expo-google-app-auth";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut,
} from "@firebase/auth";
import { auth } from '../firebase';


const AuthContext = createContext({});

const config = {
    androidClientId: '470401112993-1s7ge5dunjegi3jvrj8dfg8bk1b74o0l.apps.googleusercontent.com',
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender", "loaction"],
}

export const AuthProvider = ({ children }) => {

    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => onAuthStateChanged(auth, (user) => {
        if (user) {
            // logged in...
            setUser(user);
        }
        else {
            setUser(null);
        }

        setLoadingInitial(false)
    })
        , []);

    const logout = () => {
        setLoading(true);

        signOut(auth).catch((error) => setError(error)).finally(() => setLoading(false));
    }

    const signInWithGoogle = async () => {
        await Google.logInAsync(config).then(async (logInResult) => {
            if (logInResult.type === "success") {
                // login......
                const { idToken, accessToken } = logInResult;
                const credential = GoogleAuthProvider.credential(idToken, accessToken);
                await signInWithCredential(auth, credential);
            }

            return Promise.reject();
        }).catch(error => setError(error)).finally(() => setLoading(false));
    };

    
    return (
        <AuthContext.Provider value={{   user,
            loading,
            error,
            signInWithGoogle,
            logout,}}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext);
}


