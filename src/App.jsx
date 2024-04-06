import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Quotes from './components/quotes/Quotes'
import Banner from './components/banner/Banner'
import Banner1 from './components/banner/Banner1'
import Featurte from './components/features/Featurte'
import { AppStore } from './components/appstore/AppStore'
import Footer from './components/footer/Footer'
import Popupplayer from './components/popuplayer/Popupplayer'
import AOS from 'aos'
import "aos/dist/aos.css"
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <main className='overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300'>
      <Navbar/>
      <Hero/>
      <Quotes/>
      <Banner/>
      <Banner1/>
      <Featurte/>
      <AppStore/>
      <Footer/>
      <Popupplayer/>
    </main>
  )
}

export default App
