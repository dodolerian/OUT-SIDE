import React from 'react';
import './Register.css';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();

    const RegisterConnect = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8888/register', {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }).then(() => {
            navigate('/login');
            return;
        }).catch((error) => {
            console.log(error);
        });
    };
    return (
        <div>
            <form onSubmit={RegisterConnect}>
                <h1 className='out'>OUT <label className='side'>SIDE</label></h1>
                <label>
                    <p>First Name</p>
                    <input type="text" placeholder='John' />
                </label>
                <label>
                    <p>Last Name</p>
                    <input type="text" placeholder='Doe' />
                </label>
                <label>
                    <p>Username</p>
                    <input type="text" placeholder='JohnDoe' />
                </label>
                <label>
                    <p>e-mail</p>
                    <input type="text" placeholder='exemple.com' />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" placeholder='****' />
                </label>
                
                <button className="bouton-register" type="submit">Register</button>
            </form>
        </div>
    );
}
export default Register;