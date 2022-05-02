import React from 'react';
import {Route,Routes} from 'react-router-dom';
import LandingPage from '../Components/LandingPage';

export default function AllRouters() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
    </Routes>
  )
}
