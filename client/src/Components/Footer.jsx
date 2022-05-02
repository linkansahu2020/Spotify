import React from 'react'
import styled from 'styled-components'
import { FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <Container>
        <InnerDiv>
            <LogoDiv>
                <img src="https://imgs.search.brave.com/rX0f2_Vj21f83lE1-Hvv3A2vnDkOWUHJsLC1lbIh8tE/rs:fit:1200:1010:1/g:ce/aHR0cDovL3d3dy5j/bGtlci5jb20vY2xp/cGFydHMvNS9jL2Ev/Zi8xNDE0OTAwMDU4/MTE0ODk3OTgwMjYy/NzQuc3BvdGlmeS1s/b2dvLWhvcml6b250/YWwtd2hpdGUtcmdi/LnBuZw" width='100%' alt="" />
            </LogoDiv>
            <Info>
                <div>
                    <HeadText>COMPANY</HeadText>
                    <Text>About</Text>
                    <Text>Jobs</Text>
                    <Text>For the Record</Text>
                </div>
                <div>
                    <HeadText>COMMUNITIES</HeadText>
                    <Text>For Artists</Text>
                    <Text>Developers</Text>
                    <Text>Advertising</Text>
                    <Text>Investors</Text>
                    <Text>Vendors</Text>
                </div>
                <div>
                    <HeadText>USEFUL LINKS</HeadText>
                    <Text>Support</Text>
                    <Text>Web Player</Text>
                    <Text>Free Mobile App</Text>
                </div>
            </Info>
            <SocialMedia>
                <Media>
                    <FaInstagram className='social_logo'/>
                </Media>
                <Media>
                    <FaTwitter className='social_logo'/>
                </Media>
                <Media>
                    <FaFacebookF className='social_logo'/>
                </Media>
            </SocialMedia>
            <MinorDiv>
                <span>Legal</span>
                <span>Privacy Center</span>
                <span>Privacy Policy</span>
                <span>Cookies</span>
                <span>About Ads</span>
                <MiniDiv>
                    <span>India(English)</span><br/>
                    <span>2020 Spotify AB</span>
                </MiniDiv>
            </MinorDiv>
        </InnerDiv>
    </Container>
  )
}
const Container = styled.div`
text-align: left;
padding: 10vh 20vw;
line-height: 0vh;
justify-content: space-between;
background: black;
color: white;
`
const InnerDiv = styled.div`
width: 100%;
position: relative;
`
const Info = styled.div`
width: 25vw;
display: flex;
justify-content: space-between;
position: relative;
left: 10vw;
line-height: 2vh;
`
const LogoDiv = styled.div`
width: 7vw;
position: absolute;
left: 0;
`
const HeadText = styled.p`
font-weight: bold;
font-size: 1.4vh;
color: #929496;
`
const Text = styled.p`
font-weight: bold;
cursor: pointer;
font-size: 1.5vh;
&:hover{
    color: #1cd860;
}
`
const SocialMedia = styled.div`
position: absolute;
right: 0;
top: 0;
display: flex;
gap: .6vw;
`
const Media = styled.div`
background: #222326;
border-radius: 50%;
padding: 1.5vh .8vw;
font-size: 2.4vh;
cursor: pointer;
&:hover{
    color: #1cd860;
}
`
const MinorDiv = styled.div`
margin-top: 10vh;
display: flex;
gap: 1.5vw;
color: #929496;
& span{
    font-size: 1.3vh;
    cursor: pointer;
    &:hover{
        color: #1cd860;
    }
}
`
const MiniDiv = styled.div`
position: absolute;
right: 0;
bottom: 0;
line-height: 2vh;
`