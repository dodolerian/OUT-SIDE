import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  return (
    <div>
      <h1>Message du serveur Go :</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
