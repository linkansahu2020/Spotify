import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg'

export default function BodyNavbar() {
  const background = useSelector((state)=>state.background)
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
        <ButtonDiv>
            Upgrade
        </ButtonDiv>
        <ButtonDiv className='profile'>
            <IconDiv><CgProfile/></IconDiv>
            Profile
        </ButtonDiv>
    </Container>
  )
}

const Container = styled.div`
border: 1px solid red;
background: ${props=>props.background};
padding: 1% 30px;
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
border: 1px solid red;
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
padding: 5px 10px;
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