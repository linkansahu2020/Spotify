import axios from 'axios';
import React, { useEffect } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike } from '../Redux/action';

export default function Like({audio}) {
  const [currentColor,setCurrentColor] = React.useState(false);
  const user = useSelector(state => state.user)
  const liked_songs = useSelector(state => state.liked_songs)
  const token = useSelector(state => state.token)
  const dispatch = useDispatch()
  useEffect(()=>{
    const song = liked_songs?.find((ele)=>ele._id===audio?._id)
    if(song) setCurrentColor(true);
  },[audio,liked_songs])
  return (
    <div>
        <AiOutlineLike style={{fontSize:'17px',color:`${currentColor?'#00b24a':'white'}`}} onClick={()=>{
          if(currentColor){
            axios.request(`http://localhost:8080/likes?user=${user?._id}&audio=${audio._id}`,{
              method:'PUT',
              headers: {
                "Authorization": "Bearer " + token
              }
            }).then(res=>{
              setCurrentColor(prev=>!prev)
              dispatch(removeLike(audio));
            })
          } else {
            axios.request(`http://localhost:8080/likes?user=${user?._id}&audio=${audio._id}`,{
              method:'POST',
              body: null,
              headers: {
                "Authorization": "Bearer " + token
              }
            }).then(res=>{
              setCurrentColor(prev=>!prev)
              dispatch(addLike(audio))
            })
          }
        }}/>
    </div>
  )
}
