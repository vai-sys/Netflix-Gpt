import React from 'react'
import User from './User'
import { useState } from 'react';

const About = () => {
  const[show,setshow]=useState(null);
 const showData=()=>{
  setshow(<User/>)

 }

  return (
    <div>
      <div>
        <button onClick={()=>{showData}}>Show details</button>
      </div>

      {/* <div>
      <User/>
      </div> */}
        
        
    </div>
  )
}

export default About
