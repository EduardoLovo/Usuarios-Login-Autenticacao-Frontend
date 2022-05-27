import React, { useEffect, useState } from 'react';
import { Api } from '../../Api/Api';
import './Users.css'

export const Users = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        getUsers();

    }, [])

    const getUsers = async () => {
        const response = await Api.buildApiGetRequest(Api.readAllUsuariosUrl());
        const data = await response.json();

        setUser(data)
    };



    const users = user.length


    return (
        <div className='usersBody'>
            <h2> Quantidade de Usuarios Cadastrados:</h2>
            <p>{users}</p>
        </div>
    )
}
