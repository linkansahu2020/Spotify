import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { SmallText } from './LandingPage'
import { ContinueButton, FormDiv, Input, InputDiv, Logo, LogoContainer, OrDiv } from './Login'
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { signInWithFacebook, signInWithGoogle } from '../Firebase/firebase';

export default function Signup() {
    const [userData,setUserData] = useState({
        email: '',
        conform_email: '',
        password: '',
        username: ''
    })
    useEffect(()=>{
        document.getElementsByTagName('title')[0].innerText = 'Sign up - Spotify';
    },[]);
    console.log(userData);
    const handelChange = (event)=>{
        setUserData({...userData,[event.target.name]:event.target.value});
    }
    
  return (
    <div>
        <LogoContainer>
            <Logo>
                <img src="https://imgs.search.brave.com/sD8YzTm2xML74xjI0SKfa2ofgpVoMMA5qT4nwONWRyM/rs:fit:1200:1200:1/g:ce/aHR0cDovL2xvZ29z/LWRvd25sb2FkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wOC9TcG90aWZ5/X2xvZ29fYmxhY2su/cG5n" width='100%' alt="" />
            </Logo>
        </LogoContainer>
        <FormDiv>
            <ContinueButton color='whitesmoke' background='#3b5998' onClick={signInWithFacebook}><FaFacebookSquare className='logo'/> CONTINUE WITH FACEBOOK</ContinueButton>
            <ContinueButton color='#6a6a6a' onClick={signInWithGoogle}>
                <img src="https://imgs.search.brave.com/YKmkf4jY-3uPEAMwszoQeBxLi74CoPJqzoePtO0SriA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zNDgy/Ny5wY2RuLmNvL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzA0/L0dvb2dsZS1sb2dv/LTIwMTUtRy1pY29u/LnBuZw" width='35px' className='google_logo' alt="" />
                CONTINUE WITH GOOGLE
            </ContinueButton>
            <OrDiv>
                <div></div>
                OR
                <div></div>
            </OrDiv>
            <InputDiv>
                <SmallText className='text_div' style={{fontWeight: 'bold'}}>What is your email?</SmallText>
                <Input type='text' onChange={handelChange} name='email' placeholder='Enter your email.'/>
            </InputDiv>
            <InputDiv>
                <SmallText className='text_div' style={{fontWeight: 'bold'}}>Confirm your email</SmallText>
                <Input type='text' onChange={handelChange} name='conform_email' placeholder='Enter your email again.'/>
            </InputDiv>
            <InputDiv>
                <SmallText className='text_div' style={{fontWeight: 'bold'}}>Create a password</SmallText>
                <Input type='text' onChange={handelChange} name='password' placeholder='Create a password'/>
            </InputDiv>
            <InputDiv style={{marginBottom: '2vh'}}>
                <SmallText className='text_div' style={{fontWeight: 'bold'}}>What should we call you?</SmallText>
                <Input type='text' onChange={handelChange} name='username' placeholder='Enter a profile name'/>
                <span style={{fontSize: '13px'}}>This appers in your profile.</span>
            </InputDiv>
            <span style={{fontSize: '13px'}}>To learn more about how Spotify collects, uses, shares and protects your personal data, please see <u style={{color: '#1cd860',cursor:'pointer'}}>Spotify's Privacy Policy.</u></span>
            <SingupButton>Sign up</SingupButton>
            <SmallText className='text_div' style={{fontWeight: 'bold'}}>
                Have an account? 
                <Link to='/login'>
                    <u style={{color: '#1cd860',cursor:'pointer'}}> Log in</u>
                </Link>
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