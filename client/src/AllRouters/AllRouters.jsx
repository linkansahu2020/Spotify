import React from 'react';
import {Route,Routes} from 'react-router-dom';
// import LandingPage from '../Components/LandingPage';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import Home from '../Components/Home';
// import AudioPlayer from '../Components/AudioPlayer'
import WholeContainer from '../Components/WholeContainer';

export default function AllRouters() {
  return (
    <Routes>
        {/* <Route path='/' element={<LandingPage/>}></Route> */}
        <Route path='/' element={<WholeContainer body={<Home/>}/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}
