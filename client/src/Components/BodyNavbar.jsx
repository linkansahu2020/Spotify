import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg'
import { addToken, addUser } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

export default function BodyNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const background = useSelector((state)=>state.background)
  const user = useSelector((state)=>state.user)
  return (
    <Container background={background}>
        <BackwordForeword>
            <IconDiv>
                <IoIosArrowBack/>
            </IconDiv>
            <IconDiv>
                <IoIosArrowForward/>
            </IconDiv>
        </BackwordForeword>
        <ButtonDiv style={{background:'tranparent', border: '1px solid grey'}}>
            Upgrade
        </ButtonDiv>
        <DropdownContainer style={{position: 'relative',}}>
            <ButtonDiv className='profile'>
                {user?.display_picture?
                <div style={{width: '30px'}}>
                    <img src={user.display_picture} width='100%' style={{borderRadius: '50%'}} alt="" />
                </div>:
                <IconDiv><CgProfile/></IconDiv>
                }
                {user?.display_name}
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
        </DropdownContainer>
    </Container>
  )
}

const Container = styled.div`
background: ${props=>props.background};
text-align: left;
display: flex;
justify-content: space-between;
& .profile{
    gap: 5px;
}
& .profile:hover{
    background: dimgray;
}
`
const BackwordForeword = styled.div`
flex: 0.8;
display: flex;
align-items: center;
gap: 20px;
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
export const DropdownContainer = styled.div`
position: relative;
&:hover .dropdown-1{
    display: block;
}
`
export const Dropdown = styled.div`
width: 100%;
position: absolute;
color: grey;
background-color: #2d2c2c;
z-index: 2;
padding: 20%;
right: 0;
font-weight: bold;
border-radius: 5px;
margin-top: 2%;
display: none;
line-height: 15px;
&>p{
    cursor: pointer;
}
&>p:hover{
    color: white;
}
`