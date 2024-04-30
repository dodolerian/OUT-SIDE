import React from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();

    const LoginConnect = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/login', {
            email: e.target.email.value,
            password: e.target.password.value,
        }).then(() => {
            navigate('/nightparty');
            return;
        }).catch((error) => {
            console.log(error);
        });
    };
    return (
        <div>
            <form onSubmit={LoginConnect}>
                <h1 className='out'>OUT <label className='side'>SIDE</label></h1>
                <label htmlFor="e-mail">E-mail</label>
                <input type="text" id="e-mail" name="e-mail" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;