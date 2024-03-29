import React from 'react'
import Header from './Header'
import bg from '../images/bg.jpeg';
const Login = () => {
  return (
    <div>
     <div>
     <Header/>
      </div>  
      <div className='absolute'>
        <img src={bg} alt='bg-image'></img>
      </div>
      <div>
      <form className='relative left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black'>
        <h1 className='p-10 text-3xl font-bold'>Sign In</h1>
        <input type="text" placeholder='Email Address' className='w-full p-2 my-2'/>
        <input type="password" placeholder="password" className="w-full p-2 my-2" />
        <button className='w-full p-4 my-2 bg-red-700'>Sign In</button>
      </form>
      </div>
    </div>
  )
}

export default Login
