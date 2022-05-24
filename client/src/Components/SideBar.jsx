import React from 'react'
import styled from 'styled-components'
import '../styles/Sidebar.css'
import SidebarOption from './SidebarOption'
import { VscLibrary } from 'react-icons/vsc'
import { BsSearch,BsPlusSquareFill } from 'react-icons/bs'
import { IoHomeOutline } from 'react-icons/io5'
import { AiOutlineLike } from 'react-icons/ai'

export default function SideBar() {
  return (
    <Container>
      <div>
        <img className="sidebar_logo" src="https://imgs.search.brave.com/rX0f2_Vj21f83lE1-Hvv3A2vnDkOWUHJsLC1lbIh8tE/rs:fit:1200:1010:1/g:ce/aHR0cDovL3d3dy5j/bGtlci5jb20vY2xp/cGFydHMvNS9jL2Ev/Zi8xNDE0OTAwMDU4/MTE0ODk3OTgwMjYy/NzQuc3BvdGlmeS1s/b2dvLWhvcml6b250/YWwtd2hpdGUtcmdi/LnBuZw" alt="" />
      </div>
      <div>
        <SidebarOption option='Home' icon={<IoHomeOutline className='font-icon'/>}/>
        <SidebarOption option='Search' icon={<BsSearch className='font-icon'/>}/>
        <SidebarOption option='Your Library' icon={<VscLibrary className='font-icon'/>}/>
      </div>
      <div>
        <SidebarOption option='Create Playlist' icon={<BsPlusSquareFill className='font-icon'/>}/>
        <SidebarOption option='Liked Songs' icon={<AiOutlineLike className='font-icon'/>}/>
        <hr/>
      </div>
    </Container>
  )
}

const Container = styled.div`
flex: 0.15;
height: 86vh;
background-color: black;
color: white;
padding: 1%;
display: flex;
flex-direction: column;
gap: 25px;
text-align: left;
min-width: 230px;
& hr{
  border: 1px solid #282828;
}
`
