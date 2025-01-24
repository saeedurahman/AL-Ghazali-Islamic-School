import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero container' name="hero">
      <div className="hero-text">
        <h1>Where Quranic Light and Modern Education Show the Path Forward</h1>
        <p>Our comprehensive curriculum integrates Quranic teachings with contemporary knowledge, equipping students with the spiritual guidance, skills, and practical experiences they need to thrive in both religious and modern fields of education. We
        </p>
        <button className='btn button'>with a minimal fee</button>
        <br />
        <br />
        <button className='btn button'>Free for orphaned children</button>
        <br />
        <br />
        <button className='btn button'>Qualified female teachers are available</button>
      </div>
    </div>
  )
}

export default Hero
