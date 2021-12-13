import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import {Navigate, useLocation} from 'react-router-dom'

export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    const lastpath = useLocation();

    localStorage.setItem('lastPath', JSON.stringify(lastpath));

    return (
        user.logged ? children : <Navigate to="/login"/>
    )
}
