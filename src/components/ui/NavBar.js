import React, {useContext} from 'react'
import {
    Link,
    NavLink,
    useNavigate
  } from "react-router-dom";
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../ts/types';

export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext);

    const {name} = user;

    const navigate = useNavigate();

    const handleLogout = () =>{

        const action = {

            type: types.logout

        }


        dispatch(action)

        navigate('/login', {

            replace: true

        })

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '')} 
                        end
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '')}  
                        end
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '')}  
                        end
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">{name}</span>

                    <button className="nav-item nav-link btn" onClick={handleLogout}>

                        LogOut

                    </button>
                </ul>
            </div>
        </nav>
    )
}