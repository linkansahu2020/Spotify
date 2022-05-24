
import './App.css';
import AllRouters from './AllRouters/AllRouters';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addArtists, addSongs } from './Redux/action';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    getArtists();
    getSongs();
  })

  async function getArtists(){
    axios.get('http://localhost:8080/artists').then(result=>dispatch(addArtists(result.data)))
  }
  async function getSongs(){
    axios.get('http://localhost:8080/audios').then(result=>dispatch(addSongs(result.data)))
  }
  return (
    <div className="app">
      <AllRouters/>
    </div>
  );
}

export default App;
