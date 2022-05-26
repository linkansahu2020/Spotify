import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addLikedSongs } from '../Redux/action';

export default function Body({children}) {
  const background = useSelector((state)=>state.background)
  const user = JSON.parse(localStorage.getItem('user'));
  const token = JSON.parse(localStorage.getItem('token'));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(!user && !token) navigate('/');
    else{
      axios.get(`http://localhost:8080/likes/${user._id}`,{
        headers: {
          "Authorization": "Bearer " + token
        }
      }).then(res=>{
        dispatch(addLikedSongs(res.data.audio_ids))
      })
    }
  })
  return (
    <Container background={background}>{children}</Container>
  )
}

const Container = styled.div`
flex: 0.85;
height: 86vh;
transition: 200ms background-image ease-in;
padding: 1% 30px;
background-image: linear-gradient(${(props)=>props.background}, ${(props)=>props.background}, rgb(35, 35, 35), rgb(35, 35, 35), rgb(35, 35, 35));
overflow: scroll;
`