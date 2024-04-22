import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="Mention-légales">
                <p>Mentions légales</p>
                <p>Politique de confidentialité</p>
                <p>Politique des cookies</p>
            </div>
            <div className="Contact">
                <p>Contact</p>
                <p>FAQ</p>
                <p>Support</p>
            </div>
            <div className="Réseaux-sociaux">
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
        </footer>
    );
};

export default Footer;