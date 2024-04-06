import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import DarkMode from './DarkMode';
const Navbar = () => {
    const [open,setOpen]=useState(false);
    const togglemenu=()=>{
        setOpen(!open)
    }
    const NavLinks=[
        {
            id:1,
            name:"Home",
           link:"#"
        },
        {
            id:2,
            name:"Products",
            link:"#"
        },
        {
            id:3,
            name:"pricing",
            link:"#"
        },
        {
            id:4,
            name:"contact",
            link:"#"
        },
        

    ]
  return (
   <div className='relative z-[9999] text-black dark:text-white duration-300'>
     <div className='container py-2 md:py-0'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
        <img src={logo} alt="" className='h-16'/>
        <p className='text-3xl'>VR <span className='font-bold'>World</span></p>
        </div>
        
            <nav className='hidden md:block'>
                <ul className='flex items-center gap-8'>
                  {
                    NavLinks.map(({id,name,link})=>{
                        return (
                            <li key={id} className='py-4'>
                                <a href={link} className='text-xl font-semibold hover:text-primary py-2  hover:border-b-2 hover:border-secondary transition-colors duration-500'>{name}</a>
                            </li>
                        )
                    })}
                    {/* Darkmode feature */}
                    <DarkMode/>
                </ul>
            </nav>

            {/* {mobile navbar view bar} */}
           <div className='md:hidden block'>
            
                <div className='flex items-center gap-4'>
                   
                    <DarkMode/>
                    {
                      open ? (<HiMenuAlt1 onClick={togglemenu} className='cursor-pointer' size={30}/>) : 
               (
                <HiMenuAlt3 onClick={togglemenu} className='cursor-pointer ' size={30}/>
               )
                 }
                </div>
             
            
           </div>
      </div> 
    </div>
   </div>
  )
}

export default Navbar
