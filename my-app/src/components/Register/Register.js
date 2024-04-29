import React from 'react';
import './Register.css';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();

    const RegisterConnect = async (e) => {
        e.preventDefault();
    
        // Validation du formulaire
        if (!e.target.name.value || !e.target.surname.value || !e.target.pseudo.value || !e.target.email.value || !e.target.password.value) {
            alert('Veuillez remplir tous les champs du formulaire.');
            return;
        }
    
        // Envoi de la requête POST
        await axios.post('http://localhost:3001/register', {
            name: e.target.name.value,
            surname: e.target.surname.value,
            pseudo: e.target.pseudo.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }).then(() => {
            navigate('/nightparty');
        }).catch((error) => {
            console.log(error);
            alert('Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer.');
        });
    };
    return (
        <div>
            <form onSubmit={RegisterConnect}>
                <h1 className='out'>OUT <label className='side'>SIDE</label></h1>
                <label>
                    <p>First Name</p>
                    <input type="text" name='name' placeholder='John' />
                </label>
                <label>
                    <p>Last Name</p>
                    <input type="text" name='surname' placeholder='Doe' />
                </label>
                <label>
                    <p>Username</p>
                    <input type="text" name='pseudo' placeholder='JohnDoe' />
                </label>
                <label>
                    <p>e-mail</p>
                    <input type="text" name='email' placeholder='exemple.com' />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name='password' placeholder='****' />
                </label>
                
                <button className="bouton-register" type="submit">Register</button>
            </form>
        </div>
    );
}
export default Register;