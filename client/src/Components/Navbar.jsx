import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { CgProfile } from 'react-icons/cg'
import { Dropdown, DropdownContainer } from './BodyNavbar';
import { addToken, addUser } from '../Redux/action';

export default function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
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
            {user?
            <DropdownContainer>
                <ButtonDiv className='profile'>
                    <IconDiv><CgProfile/></IconDiv>
                    Profile
                </ButtonDiv>
                <Dropdown className='dropdown-1'>
                    <p>Account</p>
                    <p onClick={()=>{
                        dispatch(addToken(null));
                        dispatch(addUser(null));
                        localStorage.removeItem('user');
                        localStorage.removeItem('token');
                        navigate('/');
                    }}>Logout</p>
                </Dropdown>
            </DropdownContainer>:<>
            <Text onClick={()=>navigate('/signup')}>
                Sign up
            </Text>
            <Text onClick={()=>navigate('/login')}>
                Sign in
            </Text>
            </>
            }
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
const ButtonDiv = styled.div`
flex: 0.05;
border: 1px solid white;
padding: 3px 8px;
background: rgba(18, 18, 18, 0.6);
color: white;
border-radius: 50px;
font-size: 14px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
transition: 200ms background-color ease-in;
cursor: pointer;
&>div{
    color: white;
}
`
const IconDiv = styled.div`
background: rgba(18, 18, 18, 0.6);
color: grey;
font-size: 25px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
padding: 2px;
`