import React,{ useState,useEffect } from 'react'
import styled from 'styled-components'
import { FaApple,FaFacebookSquare } from 'react-icons/fa';
import { SmallText } from './LandingPage';
import { Link } from 'react-router-dom';

export default function Login() {
    const [userData,setUserData] = useState({
        email: '',
        password: ''
    });
    useEffect(()=>{
        document.getElementsByTagName('title')[0].innerText = 'Log in - Spotify'
    },[])
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
            <SmallText style={{fontWeight: 'bold'}}>To continue, log in to Spotify.</SmallText>
            <ContinueButton color='whitesmoke' background='#3b5998'><FaFacebookSquare className='logo'/> CONTINUE WITH FACEBOOK</ContinueButton>
            <ContinueButton color='whitesmoke' background='#191919'><FaApple className='logo'/> CONTINUE WITH APPLE</ContinueButton>
            <ContinueButton color='#6a6a6a'>
                <img src="https://imgs.search.brave.com/YKmkf4jY-3uPEAMwszoQeBxLi74CoPJqzoePtO0SriA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zNDgy/Ny5wY2RuLmNvL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzA0/L0dvb2dsZS1sb2dv/LTIwMTUtRy1pY29u/LnBuZw" width='35px' className='google_logo' alt="" />
                CONTINUE WITH GOOGLE
            </ContinueButton>
            <ContinueButton color='#6a6a6a'>CONTINUE WITH PHONE NUMBER</ContinueButton>
            <OrDiv>
                <div></div>
                OR
                <div></div>
            </OrDiv>
            <InputDiv>
                <SmallText className='text_div' style={{fontWeight: 'bold'}}>Email address or username</SmallText>
                <Input value={userData.email} onChange={handelChange} name='email' type='text' placeholder='Email address or username'/>
            </InputDiv>
            <InputDiv>
                <SmallText className='text_div' style={{fontWeight: 'bold'}}>Password</SmallText>
                <Input value={userData.password} onChange={handelChange} name='password' type='text' placeholder='Password'/>
            </InputDiv>
            <InputDiv>
                <SmallText className='text_div' id='forgot_password' style={{fontWeight: 'bold'}}>
                    Forgot your password?
                </SmallText>
                <Checkbox type="checkbox" name="remember_me" value='true' id="remember_me"/>
                <label style={{fontSize:'14px'}} for="remember_me">Remember me</label>
                <LoginButton>LOG IN</LoginButton>
            </InputDiv>
            <div style={{border: '1px solid gainsboro',marginTop:'3vh'}}></div>
            <AccountHave>Do you have an account?</AccountHave>
            <Link to="/signup" style={{textDecoration:'none'}}>
                <ContinueButton color='#6a6a6a'>SIGN UP FOR SPOTIFY</ContinueButton>
            </Link>
        </FormDiv>
    </div>
  )
}
export const LogoContainer = styled.div`
border-bottom: 1px solid #d9dadc;
padding: 2vh;
width: 100%;
`
export const Logo = styled.div`
width: 10vw;
margin: auto;
@media (max-width: 1024px){
    width: 15vw;
}
@media (max-width: 760px){
    width: 35vw;
    margin: auto;
}
`
export const FormDiv = styled.div`
width: 45vh;
margin: auto;
margin-top: 2vh;
@media (max-width: 760px){
    width: 98%;
}
`
export const ContinueButton = styled.div`
width: 100%;
border: 1px solid darkgray;
padding: 3.5% 0px;
color: ${prop=>prop.color};
font-weight: bold;
border-radius: 50px;
position: relative;
font-size: 14px;
margin-top: 1vh;
background: ${prop=>prop.background};
cursor: pointer;
&:hover{
    border: 1px solid black;
}
& > .google_logo{
    position: absolute;
    left: 5.5vw;
    top: 1vh;
}
`
export const OrDiv = styled.div`
font-weight: bold;
font-size: 12px;
margin: 2vh auto;
display: flex;
justify-content: space-between;
&>div{
    height: .01px;
    width: 44%;
    border: 1px solid gainsboro;
    margin: auto 0px;
}
`
export const InputDiv = styled.div`
text-align: left;
position: relative;
&>#forgot_password:hover{
    text-decoration: underline;
}
&>.text_div{
    @media (max-width: 1024px){
        text-align: left;
    }
}
`
export const Input = styled.input`
appearance: none;
    background-image: none;
    border: 0px;
    display: block;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: bold;
    width: 100%;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin-top: 0px;
    margin-bottom: 0px;
    border-radius: 4px;
    padding: 14px;
    background-color: var(--background-base,#ffffff);
    outline: none;
    box-shadow: inset 0 0 0 1px var(--essential-subdued,#878787);
    color: var(--text-base,#000000);
    &:focus {
        box-shadow: inset 0 0 0 3px var(--essential-base,#000000);
        // box-shadow: inset 0 0 0 3px var(--essential-negative,#e91429);
    }
// @media (min-width: 760px){
//     font-size: 1rem;
//     line-height: 1.5rem;
//     text-transform: none;
//     letter-spacing: normal;
// }
`
const Checkbox = styled.input`
color: red;
`
export const AccountHave = styled.div`
font-weight: bold;
font-size: 1vw;
margin-top: 1vh;
@media (max-width: 760px){
    font-size: 3vw;
    margin-top: 1vh;
}
`
export const LoginButton = styled.div`
background: #1cd860;
font-weight: bold;
font-size: 90%;
padding: 3% 6%;
width: auto;
border-radius: 50px;
position: absolute;
right: 0;
top: 5px;
@media (max-width: 760px){
    font-size: 75%;
}
`
