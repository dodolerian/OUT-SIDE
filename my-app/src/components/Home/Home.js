import React from 'react';
import './Home.css';
import Navbar from './Navbar/Navbar';

const Home = () => {
  return (
    <div>
        <Navbar />
        <main>
            <h1 className='out'>OUT <label className='side'>SIDE</label></h1>
            <p className='description'>OutSide is a platform that connects people with outdoor activities.</p>

            <div className='container'>
                <div className='card'>
                    <h2>Explore</h2>
                    <img src='https://www.flexilivre.com/images/help/faire-photo.jpeg' alt='Explore' />
                    <p>Discover new outdoor activities</p>
                    <button className='btn-explore'>Explore</button>
                </div>
                <div className='card'>
                    <h2>Connect</h2>
                    <p>Meet new people who share your interests</p>
                </div>
                <div className='card'>
                    <h2>Share</h2>
                    <p>Share your outdoor experiences with others</p>
                </div>
            </div>
        </main>
    </div>
  );
};

export default Home;