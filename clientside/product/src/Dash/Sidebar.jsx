import React, {useState} from 'react'
import IMG from '../Asset/Logo.png'
import {link} from '../data'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {



  return (
   <div className='w-[200px] h-screen bg-[#f2f2f2] p-8 fixed z-99 '>
      <div className='flex items-center gap-3'>
        <img src={IMG} alt='' className='w-[3rem]'/>
        <h1 className='font-semibold text-lg'>EZIGBO</h1>
      </div>

      <div className='mt-[5rem] grid gap-10'>
     {
      link.map((item, index)=>(
        <NavLink to={item.path} key={index} className='grid items-center justify-center text-center'>
          <div className='grid justify-center'>{item.icon}</div>
          <div>{item.name}</div>
        </NavLink>
      ))
     }
     </div>
   </div>
  )
}

export default Sidebar



