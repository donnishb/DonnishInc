import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss";


export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
        emailjs.sendForm('service_uqz7hx6', 'template_fwfeqfy', form.current, 'user_kGfkxhe3D99EIDvRjHelX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setMessage(true);
          form.current.reset();
      }
      
    
 

  /*const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };*/
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="Name" />
          <input type="text" placeholder="Email" name="Email"/>
          <textarea placeholder="Message" name="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span><h3>Thanks, I'll reply ASAP :)</h3></span>}
        </form>
      </div>
    </div>
  );
}
