import React from 'react'
import hero from '../../assets/hero.png'
import { BiPlayCircle  } from 'react-icons/bi'
const Hero = () => {
  return (
    <>
    <div className='py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden '>
        <div className="container min-h-[700px] flex relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            <div className='order-2 space-y-5 lg:pr-20 '>
             <h1 data-aos="fade-up"  data-aos-delay="300" className='text-4xl font-semibold'>GET READY TO ENJ0Y VR <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>GAMES WITH OUR PLATFORM</span></h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloribus eligendi! Fugiat reprehenderit accusamus asperiores rerum, ipsum quisquam sequi molestiae.</p>
             <div className='flex gap-6 '>
                <button className='primary-btn ' data-aos="fade-up" data-aos-delay="500">GET Started</button>
                <button className='flex items-center gap-2 ' data-aos="fade-up" data-aos-delay="700">
                    {" "}
                  <BiPlayCircle className='tetx-3xl'/>
                  See Demo
                </button>
              
             </div>
            </div>
        <div  className='order-1 sm:order-2'>
            <img src={hero} alt="" className=''/>
        </div>
        </div>
         <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper'></div>
        </div>
    </div>
    </>
  )
}

export default Hero
