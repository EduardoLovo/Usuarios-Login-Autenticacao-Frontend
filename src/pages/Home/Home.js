import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { JwtHandler } from '../../jwt-handler/jwt-handler';
import { Users } from '../Users/Users';
import './Home.css';

export const Home = () => {

    const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

    useEffect(() => {
        const handleOnJwtChange = () => {
            setIsLogged(JwtHandler.isJwtValid());
        };

        window.addEventListener("onJwtChange", handleOnJwtChange);

        // Função de limpeza
        return () => {
            window.removeEventListener("onJwtChange", handleOnJwtChange);
        };
    }, []);

    const logout = () => {
        JwtHandler.clearJwt();
    }

    return (
        <div className='homeBody'>

            <h1>PROJETO LOGIN</h1>
            <div className='btns'>
                {isLogged ?
                    <div>
                        <button onClick={logout}>Logout</button>
                    </div>
                    :
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                }

                <Link to='/cadastro'>
                    <button>Novo cadastro</button>
                </Link>
            </div>

            <div className='users'>
                <Users />
            </div>
        </div>
    )
}
