import React from 'react';
import './NightParty.css';
import Navbar from '../Home/Navbar/Navbar';
import { Link } from 'react-router-dom';

const NightParty = () => {
    return (
        <div>
            <Navbar />
            <main>
                <h1 className='out'>OUT <label className='side'>SIDE</label></h1>
                <div className='container'>
                    <div className='Card'>
                        <div className='card-content'>
                            <h1 className='title'>Night Party</h1>
                            <p className='description'>OutSide is a platform that connects people with outdoor activities.</p>
                            <Link to="/post"><button className='btn-card'>Create Post</button></Link>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
};

export default NightParty;