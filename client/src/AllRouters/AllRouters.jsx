import React from 'react';
import {Route,Routes} from 'react-router-dom';
import LandingPage from '../Components/LandingPage';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import Home from '../Components/Home';
import WholeContainer from '../Components/WholeContainer';
import ArtistContainer from '../Components/ArtistContainer';
import SongsContainer from '../Components/SongsContainer';
import LikedSongsContainer from '../Components/LikedSongsContainer';

export default function AllRouters() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<WholeContainer body={<Home/>}/>}></Route>
        <Route path='/likes' element={<WholeContainer body={<LikedSongsContainer/>}/>}></Route>
        <Route path='/songs' element={<WholeContainer body={<SongsContainer/>}/>}></Route>
        <Route path='/artist/:id' element={<WholeContainer body={<ArtistContainer/>}/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}
