import React from 'react';
import './Post.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
    const navigate = useNavigate();

    const PostConnect = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8888/post', {
            title: e.target.title.value,
            theme: e.target.theme.value,
            location: e.target.location.value,
            number: e.target.number.value,
            description: e.target.description.value,
            hours: e.target.hours.value,
            minutes: e.target.minutes.value,
        }).then(() => {
            navigate('/nightparty');
            return;
        }).catch((error) => {
            console.log(error);
        });
    };
    return (
        <div>
            <main>
                <form onSubmit={PostConnect}>
                    <h1 className='out'>OUT <label className='side'>SIDE</label></h1>
                    <label>
                        <p>Title</p>
                        <input type="text" placeholder='Title' />
                    </label>
                    <label>
                        <p>Thème</p>
                        <select>
                            <option value="party">Party</option>
                            <option value="concert">Sport</option>
                            <option value="festival">Festival</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <label>
                        <p>Location</p>
                        <input type="text" placeholder='Location' />
                    </label>
                    <label>
                        <p>Personne</p>
                        <input className='input-number' type="number" placeholder='Number of people' min={0} max={50} />
                    </label>
                    <label>
                        <p>Description</p>
                        <textarea placeholder='Content' />
                    </label>
                    <label>
                        <p>Horaire</p>
                        <select className='heure' id="hours">
                            {Array.from({ length: 24 }, (_, i) => i).map((_, i) => (
                                <option key={i} value={i}>
                                    {i.toString().padStart(2, '0')}
                                </option>
                            ))}
                        </select>
                        :
                        <select className='heure' id="minutes">
                            {Array.from({ length: 12 }, (_, i) => i * 5).map((value, i) => (
                                <option key={i} value={value}>
                                    {value.toString().padStart(2, '0')}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button className="bouton-post" type="submit">Post</button>
                </form>
            </main>
        </div>
    );
};

export default Post;