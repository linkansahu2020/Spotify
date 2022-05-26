
import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import BodyNavbar from './BodyNavbar'
import Like from './Like';
import { addCurrentPlaying, addCurrentPlayingList, addIndex, addLocation } from '../Redux/action';

export default function LikedSongsContainer() {
  const dispatch = useDispatch();
  const songs = useSelector(state=>state.liked_songs);
  useEffect(()=>{
    dispatch(addLocation('likedsongs'));
  })
  return (
    <div>
      <BodyNavbar/>
      <ArtistDescription>
        <ImageContainer>
          <img src={'https://t3.ftcdn.net/jpg/01/41/29/86/240_F_141298613_C0yFMtH8JI74Aynb16HyCgeV30GwXK2Z.jpg'} alt={'All Songs'} />
        </ImageContainer>
        <div>
          <Name>LIKED SONGS</Name>
          <span style={{fontSize:'14px', color: 'grey'}}>{`${songs?.length} songs`}</span>
        </div>
      </ArtistDescription>
      <Songs>
        {songs?.length>0 ? 
        <>
        <h2>You liked</h2>
        {songs?.map((ele,index,array)=>
            <SingleSong key={ele._id}>
                <Sl>{index+1}</Sl>
                <IndSong onClick={()=>{
                    dispatch(addCurrentPlaying(ele));
                    dispatch(addIndex(index))
                    dispatch(addCurrentPlayingList(array))
                }}>
                    <img src={ele.image} alt="" />
                    {ele.title}
                </IndSong>
                <Like style={{flex: '0.1'}} audio={ele}/>
            </SingleSong>
        )}
        </>
        :<h1>No Songs Available</h1>}
      </Songs>
    </div>
  )
}
const ArtistDescription = styled.div`
text-align: left;
padding: 30px 0px;
display: flex;
gap: 30px;
color: white;
`
const ImageContainer = styled.div`
width: 20%;
&>img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
`
const Songs = styled.div`
text-align: left;
color: white;
`
const Name = styled.h1`
font-size: 90px;
`
const SingleSong = styled.div`
width: 80%;
padding: 5px 0px;
font-size: 15px;
display: flex;
align-items: center;
border-radius: 5px;
transition: 200ms background-color ease-in;
&:hover{
    background: grey;
}
`
const Sl = styled.div`
flex: 0.03;
display: flex;
align-items: center;
justify-content: center;
`
const IndSong = styled.div`
flex: 0.95;
display: flex;
align-items: center;
gap: 10px;
& img{
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 5px;
}
`
