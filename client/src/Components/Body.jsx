import React from 'react'
import styled from 'styled-components'

export default function Body() {
  return (
    <Container>Body</Container>
  )
}

const Container = styled.div`
flex: 0.8;
height: 100vh;
background-image: linear-gradient(red, rgb(35, 35, 35), rgb(35, 35, 35), rgb(35, 35, 35));
overflow-y: overlay;
`