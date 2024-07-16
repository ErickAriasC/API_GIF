import React, { useState, useEffect } from 'react';
import { Card } from './components/Card/Card';
import './App.css';

const trendsURL = 'https://tenor.googleapis.com/v2/featured?key=AIzaSyBbY9eAvAzZO-kfGv_ul4jTX4rw-Jv_oGk&client_key=my_test_app';

function App() {
  const [listGif, setlistGif] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleGetApi = async () => {
    try {
      const response = await fetch(trendsURL);
      const data = await response.json();
      const gifs = data.results || []; // Asegúrate de que gifs sea un array
      setlistGif(gifs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = async (e) => {
    const realValue = e.target.value;
    setSearchInput(realValue);
    const searchURL = `https://tenor.googleapis.com/v2/search?q=${realValue}&key=AIzaSyBbY9eAvAzZO-kfGv_ul4jTX4rw-Jv_oGk&client_key=my_test_app&limit=20`;
    
    try {
      const response = await fetch(searchURL);
      const data = await response.json();
      const gifs = data.results || []; // Asegúrate de que gifs sea un array
      setlistGif(gifs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleGetApi();
  }, []);

  return (
    
      <div className='container_gifs'>
        <input value={searchInput} type="text" className='seeker' onChange={handleSearch} placeholder="Buscar GIF" />
        <div className='app'>
          {
            listGif.map((element, index) => (
              <Card
                key={index}
                gif={element.media_formats.gif.url}
              />
            ))
          }
        </div>
      </div>
    
  );
}

export default App;
