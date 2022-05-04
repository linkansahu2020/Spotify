import React from 'react'
import styled from 'styled-components'
import { SmallText } from './LandingPage'
import { FormDiv, Input, InputDiv, Logo, LogoContainer, OrDiv } from './Login'

export default function Signup() {
  return (
    <div>
        <LogoContainer>
            <Logo>
                <img src="https://imgs.search.brave.com/sD8YzTm2xML74xjI0SKfa2ofgpVoMMA5qT4nwONWRyM/rs:fit:1200:1200:1/g:ce/aHR0cDovL2xvZ29z/LWRvd25sb2FkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wOC9TcG90aWZ5/X2xvZ29fYmxhY2su/cG5n" width='100%' alt="" />
            </Logo>
        </LogoContainer>
        <FormDiv>
            <OrDiv>
                <div></div>
                OR
                <div></div>
            </OrDiv>
            <InputDiv>
                <SmallText className='text_div' style={{fontWeight: 'bold'}}>What is your email?</SmallText>
                <Input type='text' placeholder='Enter your email.'/>
            </InputDiv>
            <InputDiv>
                <SmallText className='text_div' style={{fontWeight: 'bold'}}>Confirm your email</SmallText>
                <Input type='text' placeholder='Enter your email again.'/>
            </InputDiv>
            <InputDiv>
                <SmallText className='text_div' style={{fontWeight: 'bold'}}>Create a password</SmallText>
                <Input type='text' placeholder='Create a password'/>
            </InputDiv>
            <InputDiv style={{marginBottom: '2vh'}}>
                <SmallText className='text_div' style={{fontWeight: 'bold'}}>What should we call you?</SmallText>
                <Input type='text' placeholder='Enter a profile name'/>
                <span style={{fontSize: '13px'}}>This appers in your profile.</span>
            </InputDiv>
            <span style={{fontSize: '13px'}}>To learn more about how Spotify collects, uses, shares and protects your personal data, please see <u style={{color: '#1cd860',cursor:'pointer'}}>Spotify's Privacy Policy.</u></span>
            <SingupButton>Sign up</SingupButton>
            <SmallText className='text_div' style={{fontWeight: 'bold'}}>
                Have an account? 
                <u style={{color: '#1cd860',cursor:'pointer'}}> Log in</u>
            </SmallText>
        </FormDiv>

    </div>
  )
}
const SingupButton = styled.div`
background: #1cd860;
font-weight: bold;
padding: 3% 5%;
border-radius: 50px;
margin: 1vh auto;
width: 20%;
cursor: pointer;
`