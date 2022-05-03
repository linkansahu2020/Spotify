import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Navbar from './Navbar'
// import { Button } from './ReuseableComponents'

export default function LandingPage() {
  return (
    <div>
        <Navbar/>
        <PinkContainer>
            <TextContainer>
                <SmallText>SPOTIFY PREMIUM</SmallText>
                <BigContent>Get 3 months of Premium for free</BigContent>
                <MediumText>Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</MediumText>
                <Button color='white' background='black'>GET 3 MONTHS FREE</Button><br/><br/>
                <AltraSmallText>Individual plan only. ₹119/month after. <u>Terms and conditions apply</u>. Open only to users who haven't already tried Premium. Offer ends 12 May 2022.</AltraSmallText>
            </TextContainer>
            <ImageDiv>
                <img src="https://i.scdn.co/image/ab678e040000ed3a2d7754efa51ae9dbeb79a9eb" width= '100%' alt="" />
            </ImageDiv>
        </PinkContainer>
        <BlueContainer>
            <TextContainer>
                <SmallText>SPOTIFY FREE</SmallText>
                <BigContent>Listening is everything</BigContent>
                <MediumText>Millions of songs and podcasts. No credit card needed.</MediumText>
                <Button color='#2941ab' background='#1cd860'>GET SPOTIFY FREE</Button>
            </TextContainer>
        </BlueContainer>
        <Footer/>
    </div>
  )
}
const PinkContainer = styled.div`
text-align: left;
display: flex;
padding: 10vh 20vw;
line-height: 0vh;
justify-content: space-between;
background: #983399;
color: white;
@media (max-width: 1024px) {
    padding: 5vh 3vw;
    display: block;
}
@media (max-width: 760px) {
    text-align: center;
}
`
const BlueContainer = styled.div`
text-align: left;
display: flex;
padding: 10vh 20vw;
line-height: 0vh;
justify-content: space-between;
background: #2941ab;
color: #1cd860;
background-size: auto 100%;
background-repeat: no-repeat;
background-image: url(${'https://content-tooling.spotifycdn.com/images/b236bf87-bfd5-4bcb-b51a-77881073039c_lie_circles.svg'});
background-position: right center;
@media (max-width: 1024px) {
    padding: 5vh 3vw;
    display: block;
    background-size: auto 100%;
    background-image: url(${'https://content-tooling.spotifycdn.com/images/1d2242b4-f071-4244-a276-3bcdc58e77cf_lie_circles-tablet.svg'});
    background-position: center center;
    background-size: auto 181%;
    background-repeat: no-repeat;
    text-align: center;
}
`
const TextContainer = styled.div`
`
const ImageDiv = styled.div`
width: 27vw;
margin: auto 0px;
@media (max-width: 1024px) {
    width: 45vw;
    margin: auto;
}
@media (max-width: 760px) {
    width: 75vw;
}
`
const BigContent = styled.p`
font-size: 6vh;
font-weight: bold;
line-height: 6.5vh;
@media (max-width: 1024px) {
    font-size: 5.3vh;
}
@media (max-width: 760px) {
    font-size: 5.5vw;
}
`
export const SmallText = styled.p`
font-size: 1.5vh;
@media (max-width: 1024px) {
    font-size: 1.3vh;
    text-align: center;
}
`
const MediumText = styled.p`
font-size: 2.5vh;
line-height: 3.7vh;
@media (max-width: 1024px) {
    font-size: 2.3vh;
}
@media (max-width: 760px) {
    font-size: 4.3vw;
}
`
const AltraSmallText = styled.p`
font-size: 1.3vh;
line-height: 1.4vh;
`
const Button = styled.button`
margin-left: .3vw;
border: 1px solid transparent;
border-radius: 5vw;
background: ${props=>props.background};
color: ${props=>props.color};
padding: 1.5vh 2vw;
font-weight: bold;
cursor: pointer;
transition: .2s;
&:hover{
    margin-left: 0vw;
    padding: 1.5vh 2.3vw;
}
`
