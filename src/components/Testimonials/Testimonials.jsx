import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/download.jpeg'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.png'

function Testimonials() {
    const slider = useRef();
    let tx = 0;
    const slideForward = () =>{
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () =>{
        if (tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testimonials' name="Testimonials">
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        {/* ائکن کو فعال کرنے لیے */}
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" onClick={slideForward}/>
                        <div>
                        <h3>Fatima 1</h3>
                        <span>Houston, USA</span>
                        </div>
                    </div>
                    <p>"Enrolling my child in AL Ghazali Islamic School was one of the best decisions I have ever made. The dedicated online instructors, interactive teaching methods, and commitment to combining Islamic education with modern learning tools have truly exceeded my expectations. I am amazed at how effectively this online platform fosters both knowledge and character development."

.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                        <h3>Kamran 2</h3>
                        <span>Ney york, USA</span>
                        </div>
                    </div>
                    <p>Learning the Quran through AL Ghazali Islamic School has been one of the most rewarding experiences of my life. The knowledgeable and supportive teachers, engaging online classes, and their dedication to imparting the true essence of the Quran have exceeded my expectations. I feel spiritually enriched and deeply grateful for this transformative journey.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                        <h3>Shabana mir 3</h3>
                        <span>Chicago, USA</span>
                        </div>
                    </div>
                    <p>"Enrolling my children in AL Ghazali Islamic School has been one of the best decisions I've ever made. Despite living in an English-speaking environment, my children have learned Urdu fluently and reconnected with their cultural roots. I am deeply grateful for the school’s dedication and efforts in preserving our mother tongue.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                        <h3>Ahmad 4</h3>
                        <span>Los Angeles, California, USA</span>
                        </div>
                    </div>
                    <p>Enrolling our child in AL Ghazali Islamic School was a fantastic decision. Through their expert guidance, our child not only learned Python but also developed critical problem-solving skills and a passion for coding. We are truly impressed with how this program has prepared them for the future, and we deeply appreciate the school’s dedication to excellence.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
