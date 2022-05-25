import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'

export default function Like() {
  const [currentColor,setCurrentColor] = React.useState(false);
  return (
    <div>
        <AiOutlineLike style={{fontSize:'17px',color:`${currentColor?'#00b24a':'white'}`}} onClick={()=>setCurrentColor(prev=>!prev)}/>
    </div>
  )
}
