import './Card.css';
import axios from 'axios';

const Card = () => {
    
    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/posts');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='Card'>
            <div className='card'>
                <h1 className='out'>OUT <label className='side'>SIDE</label></h1>
                <button onClick={fetchPosts} className='btn-card'>Get Posts</button>
            </div>
        </div>
    );
};

export default Card;
