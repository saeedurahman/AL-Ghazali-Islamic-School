import React from 'react'
import './Campus.css'
import Hafiz_1 from '../../assets/hafez-1.png'
import hafiz_2 from '../../assets/hafez-2.jpg'
import hafiz_3 from '../../assets/hafez3.webp'
import programing_4 from '../../assets/programing.jpg'

import white_arrow from '../../assets/white-arrow.png'
function Campus() {
  return (
    <div className='campus' name="Campus">
      <div className="gallery">
        <img src={Hafiz_1} alt="" />
        <img src={hafiz_3} alt="" />
        <img src={hafiz_2} alt="" />
        <img src={programing_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
