import React from 'react';
import {Route,Routes} from 'react-router-dom';
import LandingPage from '../Components/LandingPage';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

export default function AllRouters() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/' element={<Signup/>}></Route>
    </Routes>
  )
}
