import React from 'react';
import './Home.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Navbar />
        <main>
            <h1 className='out'>OUT <label className='side'>SIDE</label></h1>
            <p className='description'>OutSide is a platform that connects people with outdoor activities.</p>
            <Link to="/nightparty"><button className='btn'>Get Started</button></Link>
        </main>
        <Footer />
    </div>
  );
};

export default Home;