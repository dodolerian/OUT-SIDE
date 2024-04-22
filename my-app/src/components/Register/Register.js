import React from 'react';
import './Register.css';
const Register = () => {
    return (
        <div>
            <form>
                <h1 className='out'>OUT <label className='side'>SIDE</label></h1>
                <label>
                    <p>e-mail</p>
                    <input type="text" placeholder='exemple.com' />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" placeholder='****' />
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input type="password" placeholder='****' />
                </label>
                
                <button className="bouton-register" type="submit">Register</button>
            </form>
        </div>
    );
}
export default Register;