import React from 'react'
import Message from './Message'

function ParentComponent() {
    const buttonclick=(value)=>{
      console.log(value);
    }
  return (
   <>
   <h1><Message name="Prince" lastName="Chacko" onbuttonclick={buttonclick}/></h1>
   </>
   
  )
}

export default ParentComponent