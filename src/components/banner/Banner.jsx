import React from 'react'
import banner from '../../assets/banner1.png'
import { BiPlayCircle } from 'react-icons/bi'
const Banner = () => {
  return (
    <div className='py-12 sm:py-0 realtive'>
        <div className="container min-h-[620px] flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center ">
                <div data-aos="fade-up" data-aos-once="false">
                    <img src={banner} alt="" className='relative w-full max-w-[400px]'/>
                </div>
               <div>
               <div
                className=' space-y-5 lg:pr-20 '>
             <h1 data-aos="fade-up"   data-aos-delay="300"  className='text-4xl font-semibold'>GET READY TO ENJ0Y VR <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>GAMES WITH OUR PLATFORM</span></h1>
             <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloribus eligendi! Fugiat reprehenderit accusamus asperiores rerum, ipsum quisquam sequi molestiae.</p>
             <div className='flex gap-6'>
                <button className='primary-btn' data-aos="fade-up"   data-aos-delay="300">GET Started</button>
                <button className='flex items-center gap-2'data-aos="fade-up"   data-aos-delay="300">
                    {" "}
                  <BiPlayCircle className='tetx-3xl'/>
                  See Demo
                </button>
              
             </div>
            </div>
               </div>
            </div>
        </div>
      
    </div>
  )
}

export default Banner
