import './App.css';
import api from './api/axiosConfig';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const[movies, setMovies] = useState();

  const getMovies = async () =>{

  //   axios.get(baseURL)
  //   .then(response => {
  //   // The response.data will contain the data in JSON format
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   console.error('Error fetching data:', error);
  // });

    try
    {
      const response = await api.get('/api/movies');

      console.log(response.data);

      setMovies(response.data);

    }catch(err)
    {
      console.log(err);
    }
  }

  useEffect(() =>{
    getMovies();

  },[])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
