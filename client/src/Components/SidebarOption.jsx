import React from 'react'
import styled from 'styled-components'

export default function SidebarOption({option,icon,color}) {
  return (
    <SidebarOptionContainer color={color}>
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