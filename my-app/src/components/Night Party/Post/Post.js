import React from 'react';
import './Post.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
    const navigate = useNavigate();

    const PostConnect = async (e) => {
        const hours = e.target.hours.value;
        const minutes = e.target.minutes.value;
        const time = new Date();
        time.setHours(hours);
        time.setMinutes(minutes);
        console.log(time);
        e.preventDefault();
        await axios.post('http://localhost:3001/post', {
            time : new Date().getTime(),
            title: e.target.title.value,
            location: e.target.location.value,
            participant: e.target.participant.value,
            content: e.target.content.value,
            timetable: time.getTime(),   
        }).then(() => {
            navigate('/nightparty');
            return;
        }).catch((error) => {
            console.log("erreur de post", error);
        });
    };
    return (
        <div>
            <main>
                <form onSubmit={PostConnect}>
                    <h1 className='out'>OUT <label className='side'>SIDE</label></h1>
                    <label>
                        <p>Title</p>
                        <input type="text" name='title' placeholder='Title' />
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
                        <input type="text" name='location' placeholder='Location' />
                    </label>
                    <label>
                        <p>Personne</p>
                        <input className='input-number' type="number" name='participant' placeholder='Number of people' min={0} max={50} />
                    </label>
                    <label>
                        <p>Description</p>
                        <textarea placeholder='Content' name='content' />
                    </label>
                    <label>
                        <p>Horaire</p>
                        <select className='heure' name='hours' id="hours">
                            {Array.from({ length: 24 }, (_, i) => i).map((_, i) => (
                                <option key={i} value={i}>
                                    {i.toString().padStart(2, '0')}
                                </option>
                            ))}
                        </select>
                        :
                        <select className='heure' name='minutes' id="minutes">
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