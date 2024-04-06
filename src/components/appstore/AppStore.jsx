import React from 'react'
import playstore from '../../assets/play_store.png'
import appstore from '../../assets/app_store.png'
export const AppStore = () => {
  return (
    <>
    <div  className='container py-10 sm:min-h-[400px] sm:grid sm:place-items-center'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 data-aos="fade-up"   data-aos-delay="300" className='text-3xl text-center sm:text-4xl font-semibold'>Get Started with our app</h1>
            <p data-aos="fade-up"   data-aos-delay="300" className='text-center sm:px-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed expedita minima doloribus totam, accusantium libero!</p>
            <div className='flex flex-wrap justify-center gap-4 items-center'>
                <a href="">
                    <img src={playstore} alt="" className=' max-w-[150px]  md:max-w-[250px]' data-aos="fade-up"   data-aos-delay="300"/>
                </a>
                <a href="">
                    <img src={appstore} alt="" className='max-w-[150px]  md:max-w-[250px]' data-aos="fade-up"   data-aos-delay="300"/>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}
