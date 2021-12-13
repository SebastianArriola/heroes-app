import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../ts/types';

export const LoginScreen = () => {

    const [formValues, handleInputChange] = useForm({

        user: '',
        password: ''

    })

    const { user, password } = formValues;

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {

        e.preventDefault();

        const action = {

            type: types.login,
            payload: {

                name: user,
                pass: password

            }

        }

        dispatch(action);

        const { pathname, search } = JSON.parse(localStorage.getItem('lastPath')) || "/marvel";

        const completePath = search ? pathname + search : pathname

        navigate(completePath, {

            replace: true

        });



    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <form onSubmit={handleLogin}>

                <input type="text" className="form-control" placeholder='User' name="user" value={user} onChange={handleInputChange} autoComplete='off'/>
                <input type="password" className="form-control mt-3" placeholder='Password' name="password" value={password} onChange={handleInputChange} autoComplete='off'/>
                <button type="submit" className='btn btn-outline-primary mt-3'>Login</button>

            </form>

        </div>
    )
}

