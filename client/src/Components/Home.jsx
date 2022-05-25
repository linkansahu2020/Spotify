import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addBackground, addCurrentPlaying, addCurrentPlayingList, addIndex, addLocation } from '../Redux/action';
import BodyNavbar from './BodyNavbar'

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const artists = useSelector((state)=>state.artists);
  const songs = useSelector((state)=>state.songs);
  const suffleElements = (array)=>{
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  useEffect(()=>{
    dispatch(addLocation('home'));
  })
  return (
    <div>
      <BodyNavbar/>
      <div style={{textAlign: 'left',color: 'white'}}>
        <h1>Have a good day!</h1>
        <ForTheDay>
          <SpecialContainer>
            <img src="https://t3.ftcdn.net/jpg/01/41/29/86/240_F_141298613_C0yFMtH8JI74Aynb16HyCgeV30GwXK2Z.jpg" alt="LikeSong" />
            <Name>Liked Songs</Name>
          </SpecialContainer>
          {artists?suffleElements(artists).slice(0, 5).map(({_id,display_picture,name,color})=>
            <SpecialContainer key={_id} onMouseEnter={()=>dispatch(addBackground(color))}>
              <img src={display_picture} alt={`${name}`} />
              <Name>{name}</Name>
            </SpecialContainer>
          )
          :null}
        </ForTheDay>
        <Heading>
          <h2>Songs for you</h2>
          <span>SEE ALL</span>
        </Heading>
        <SongsContainer>
          {songs?
          suffleElements(songs).slice(0, 8).map(({_id,audio,title,image,artist},index,array)=>
          <PlayContainer key={index} onClick={()=>{
            dispatch(addCurrentPlaying({_id,audio,title,image,artist}));
            dispatch(addIndex(index))
            dispatch(addCurrentPlayingList(array))
          }}>
            <img src={image} alt={title}/>
            <Name>{title}</Name>
            <Description>{artist.name}</Description>
          </PlayContainer>)
          :null}
        </SongsContainer>
        <Heading>
          <h2>Popular artists</h2>
          <span>SEE ALL</span>
        </Heading>
        <SongsContainer>
          {artists?
          suffleElements(artists).slice(0, 8).map(({_id,display_picture,name,color})=>
          <PlayContainer key={_id} onMouseEnter={()=>dispatch(addBackground(color))} onClick={()=>navigate(`/artist/${_id}`)}>
            <img src={display_picture} alt={name} style={{borderRadius:'50%'}}/>
            <Name>{name}</Name>
            <Description>Artist</Description>
          </PlayContainer>)
          :null}
        </SongsContainer>
      </div>
    </div>
  )
}
const SongsContainer = styled.div`
display: grid;
grid-template-columns: repeat(8,1fr);
gap: 20px;
`
const PlayContainer = styled.div`
height: auto;
background-color: rgb(52, 52, 52);
transition: 200ms background-color ease-in;
padding: 15px;
border-radius: 5px;
&>img{
  width: 100%;
  height: 150px;
  border-radius: 5px;
  object-fit: cover;
}
&:hover{
  background-color: rgb(71, 71, 71);
}
`
export const Name = styled.p`
font-weight: bold;
font-size: 15px;
text-align: left;
`
const Description = styled.p`
color: grey;
font-size: 13px;
`
const Heading = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
&>span{
  font-size: 12px;
  font-weight: bold;
  color: lightgray;
  cursor: pointer;
}
`
const ForTheDay = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 20px;
`
export const SpecialContainer = styled.div`
display: flex;
gap: 15px;
background-color: rgba(52, 52, 52, 0.5);
align-items: center;
border-radius: 5px;
&>img{
  width: 20%;
  height: 100px;
  object-fit: cover;
  border-radius: 5px 0px 0px 5px;
}
`