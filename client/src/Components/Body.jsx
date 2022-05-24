import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
// import axios from 'axios';

export default function Body({children}) {
  const background = useSelector((state)=>state.background)
  // React.useEffect(()=>{
  //   axios.get('https://localhost:8080/userData').then(res=>{
  //     console.log(res.data)
  //   })
  // })
  return (
    <Container background={background}>{children}</Container>
  )
}

const Container = styled.div`
flex: 0.85;
height: 86vh;
transition: 200ms background-image ease-in;
background-image: linear-gradient(${(props)=>props.background}, ${(props)=>props.background}, rgb(35, 35, 35), rgb(35, 35, 35), rgb(35, 35, 35));
overflow: scroll;
padding: 1% 30px;
`