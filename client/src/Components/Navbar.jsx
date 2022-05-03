import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
  return (
    <Container>
        <LogoDiv>
            <img src="https://imgs.search.brave.com/rX0f2_Vj21f83lE1-Hvv3A2vnDkOWUHJsLC1lbIh8tE/rs:fit:1200:1010:1/g:ce/aHR0cDovL3d3dy5j/bGtlci5jb20vY2xp/cGFydHMvNS9jL2Ev/Zi8xNDE0OTAwMDU4/MTE0ODk3OTgwMjYy/NzQuc3BvdGlmeS1s/b2dvLWhvcml6b250/YWwtd2hpdGUtcmdi/LnBuZw" width='100%' alt="" />
        </LogoDiv>
        <MenuDiv>
            <Text>Premium</Text>
            <Text>Support</Text>
            <Text>Download</Text>
            <div style={{
                height: '50%',
                margin: 'auto',
                borderRight: '.1px solid white',
            }}></div>
            <Text>Sign up</Text>
            <Text>Sign in</Text>
        </MenuDiv>
    </Container>
  )
}
const Container = styled.div`
text-align: left;
padding: 2vh 20vw;
line-height: 0vh;
justify-content: space-between;
background: black;
color: white;
display: flex;
@media (max-width: 1024px) {
    padding: 2vh 3vw;
}
`
const MenuDiv = styled.div`
display: flex;
gap: 2vw;
@media (max-width: 760px) {
    display: none;
}
`
const LogoDiv = styled.div`
width: 7vw;
@media (max-width: 1024px) {
    width: 13vw;
}
@media (max-width: 760px) {
    width: 25vw;
}
`
const Text = styled.p`
font-weight: bold;
cursor: pointer;
font-size: 1.5vh;
margin: auto 0px;
&:hover{
    color: #1cd860;
}
`
