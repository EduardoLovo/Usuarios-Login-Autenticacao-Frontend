import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Api } from '../../Api/Api';
import '../../style/style.css'

export const Cadastro = () => {

    const navigate = useNavigate()


    const handleSubmit = async event => {
        event.preventDefault();

        // Obtém os dados dos inputs
        const usuario = event.target.usuario.value;
        const password = event.target.password.value;

        // Constrói um payload com esses dados
        const payload = {
            usuario,
            password,
        };

        // Faz uma requisição no backend
        try {

            const response = await Api.buildApiPostRequest(Api.createUsuariosUrl(), payload);

            const data = await response.json();
            console.log(data);

            navigate('/')
        } catch (err) {
            console.log(err, 'erro no cadastro');
        }

    }

    return (
        <div className='content'>
            <h1 >Cadastro</h1>
            <form onSubmit={handleSubmit} className='form'>
                <label>Novo Usuario</label>
                <div className='usericon'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png' alt='user' />

                    <input
                        type='text'
                        id='usuario'
                        name='usuario'
                        placeholder='...'
                    />
                </div>

                <label>Senha</label>
                <div className='usericon'>
                    <img src='https://cdn0.iconfinder.com/data/icons/i-Love-Icons/512/lock.png' alt='lock' />

                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder=''
                    />
                </div>

                <input
                    className='btnEnviar'
                    type='submit'
                    value='Cadastrar'
                />
            </form>
            <Link to='/'><button className='btnBack'>Voltar</button></Link>
        </div>
    )
}
