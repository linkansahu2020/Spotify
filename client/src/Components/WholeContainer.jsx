import React from 'react'
import styled from 'styled-components'
import AudioPlayer from './AudioPlayer'
import Body from './Body'
import SideBar from './SideBar'

export default function WholeContainer() {
  return (
    <>
    <Container>
        <SideBar/>
        <Body/>
    </Container>
    <AudioPlayer/>
    </>
  )
}

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
`
