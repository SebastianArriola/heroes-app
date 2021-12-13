import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import 'animate.css';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

const userInit = () => {

    return JSON.parse( localStorage.getItem('user') ) || {logged: false}

}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, [], userInit)

    useEffect(() => {
        
        if(!user) return;

        localStorage.setItem('user', JSON.stringify(user));

    }, [user])

    return (
        <AuthContext.Provider value={{

            user,
            dispatch

        }}>

            <AppRouter />

        </AuthContext.Provider>
    )
}
