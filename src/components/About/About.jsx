import React from 'react'
import './About.css'
// import about_img from '../../assets/about.png'
import about_img from '../../assets/Adil.jpg'
import play_icon from '../../assets/play-icon.png'

function About({setPlayState}) {
  return (
    //دو کالمز بنانے ہے
    <div className="about" name = "About">
        <div className="about-left">
            <img src={about_img} className='about-img' />
            <img src={play_icon} className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT AL GHAZALI ISLAMIC SCHOOL</h3>
            <h2>Shaping Future Generations Through Faith and Knowledge</h2>
            <p>
            Embark on a transformative educational journey with Al Ghazali Islamic School. Our curriculum uniquely blends Quranic teachings with contemporary education, offering courses in Seerah, Hadith, Islamic history, and essential jurisprudence, alongside modern subjects like mathematics, programming, and language studies. This holistic approach empowers students with spiritual and academic excellence.
            </p>
            <p>
            Our programs emphasize personalized learning, practical application, and mentorship to ensure students develop the skills and knowledge necessary for success. From mastering Tajweed and memorizing the Quran to gaining proficiency in Urdu, Pashto, English, and even advanced programming languages, we nurture well-rounded individuals ready to excel in every field.
            </p>
        </div>
      
    </div>
  )
}

export default About
