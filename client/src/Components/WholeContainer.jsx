import React from 'react'
import styled from 'styled-components'
import AudioPlayer from './AudioPlayer'
import SideBar from './SideBar'
import Body from './Body'

export default function WholeContainer({body}) {
  React.useEffect(()=>{
    document.getElementsByTagName('title')[0].innerText='Spotify - Web Player';
  })
  return (
    <>
    <Container>
      <SideBar/>
      <Body>
        {body}
      </Body>
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
