import React, { useEffect, useState } from 'react'
import './Navbar.css';

import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';


function Navbar() {
//لوجک اسلیے لگارہے کہ اسکرول کرنے پر ہیڈر کلر چینج
const[sticky,setSticky] = useState(false)

useEffect(()=>{
window.addEventListener('scroll', ()=>{
  window.scrollY > 50 ? setSticky(true): setSticky(false)
})
},[])

// ye state sirf isly add kya ky choty acreen per iakon mange ho
  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
      {/* <img src={logo} className='logo'/> */}
      <h1><span>Al Ghazali</span><br />Islamic School</h1>
      
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        {/* پہلے سادہ ایل ائی سے بنایا تو پھر اسکرولنگ کے لیے لنک لایا */}
        <li className='active'> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link> </li>
        <li> <Link to='Programs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
        <li> <Link to='About' smooth={true} offset={-150} duration={500}>About</Link></li>
        <li> <Link to='Campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li> <Link to='Testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        {/* پہلے ہم نے یہ بٹن ٹیگز سے بنایا تھا،بعد مین اسکرولنگ ٹھیک کرنے کے لیے اسکی جگہ لنک کردیا */}
        <li><Link to='Contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      {/* یہاں امیج میڈیا کوئی بناتے وقت لگائی تاکہ ائکن چھوٹی اسکرین کے لیے فیڈ کیا جاسکے */}
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
