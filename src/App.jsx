import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {

  const [playState,setPlayState] = useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        {/* ٹائٹل میں بطور پرامس یہاں سے اسلیے بھیجا کہ ہم اس کو مختلف جگہ استعمال کرنا چاہتے تھے */}
        <Title subTitle = 'Our PROGRAMS' title = 'What We Offer'/>
      <Programs/>
      <About setPlayState = {setPlayState}/>
      <Title subTitle = 'Gallery' title = 'Campus Photos'/>
      <Campus/>
      <Title subTitle = 'TESTIMONIALS' title = 'What Student Says'/>
      <Testimonials/>
      <Title subTitle = 'Contact Us' title = 'Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState = {playState} setPlayState = {setPlayState}/>
    </div>
  )
}

export default App


// نیو بار،ہیرو،تائٹل اور پروگرامز بنانے کے بعد ہم نے ابوڈ پیچ بنانے کے لیے کام شروع کیا