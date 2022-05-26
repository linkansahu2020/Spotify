import axios from 'axios';
import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { addLike } from '../Redux/action';

export default function Like({audio}) {
  const [currentColor,setCurrentColor] = React.useState(false);
  const user = useSelector(state => state.user)
  const token = useSelector(state => state.token)
  const dispatch = useDispatch()
  return (
    <div>
        <AiOutlineLike style={{fontSize:'17px',color:`${currentColor?'#00b24a':'white'}`}} onClick={()=>{
          setCurrentColor(prev=>!prev)
          axios.request(`http://localhost:8080/likes?user=${user?._id}&audio=${audio._id}`,{
            method:'POST',
            body: null,
            headers: {
              "Authorization": "Bearer " + token
            }
          }).then(res=>{
            dispatch(addLike(audio))
          })
        }}/>
    </div>
  )
}
