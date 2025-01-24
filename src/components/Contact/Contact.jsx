import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import whats_aapp from '../../assets/whatsapp.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import laocation_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e1abc4d8-0fc4-46ae-8ded-2160859a775e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' name="Contact">
      <div className="contact-col">

     
        <a href="https://wa.me/923442259592" rel="noopener noreferrer" target="_blank">
        <h3>
          WhatsApp for more info <img src={whats_aapp} alt="WhatsApp" style={{paddingTop: '20px'}}/>
          </h3>
        </a>
      

        <p>Feel free tho reach out throufh contact form or find our contact information below. Your feedback,questions and sugggestion are important to us as we strive to provde excptional service to our School community.</p>
        <ul>
            <li> <img src={mail_icon} alt=""/> saeedurahman760@gmail.com</li>
            <li> <img src={phone_icon} alt=""/> +92 3442259592</li>
            <li> <img src={laocation_icon} alt=""/>Muslim Twon<br /> Lahore,Pakistan</li>
        </ul>
      </div>
      <div className="contact-col">
      <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder='Enter you name' required/>
            <label>Phone Nubmer</label>
            <input type="tel" name="phone" placeholder='Enter uou mobile Number' required/>
            <textarea name="message" rows='6' placeholder='enter you message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow}/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
