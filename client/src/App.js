
import './App.css';
import AllRouters from './AllRouters/AllRouters';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addArtists, addSongs, addToken, addUser } from './Redux/action';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    getArtists();
    getSongs();
    getUserFromLocalStorage()
  })

  async function getArtists(){
    axios.get('http://localhost:8080/artists').then(result=>dispatch(addArtists(result.data)))
  }
  async function getSongs(){
    axios.get('http://localhost:8080/audios').then(result=>dispatch(addSongs(result.data)))
  }
  function getUserFromLocalStorage(){
    const user = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));
    dispatch(addUser(user));
    dispatch(addToken(token));
  }
  return (
    <div className="app">
      <AllRouters/>
    </div>
  );
}

export default App;
