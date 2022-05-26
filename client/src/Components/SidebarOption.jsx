import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function SidebarOption({option,icon,color}) {
  const navigate = useNavigate();
  return (
    <SidebarOptionContainer color={color} onClick={()=>{
      if(option === 'Home') navigate('/home');
      else if(option === 'Liked Songs') navigate('/likes');
    }}>
      {icon}
      {option}
    </SidebarOptionContainer>
  )
}

const SidebarOptionContainer = styled.div`
color: ${props=>props.color};
cursor: pointer;
height: 40px;
transition: 200ms color ease-in;
font-weight: bold;
font-size: 14px;
display: flex;
gap: 15px;
align-items: center;
&:hover{
  color: white;
}
&>.font-icon{
  font-size: 22px;
}
`