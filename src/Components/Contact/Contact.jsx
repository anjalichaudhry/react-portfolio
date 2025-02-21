import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import "./Contact.css";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a8e3a04e-a1ca-4b89-9fe7-0bd236a6b809");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm a passionate backend developer with expertise in Java (Spring
            Boot),PHP (Laravel), and MySQL. I specialize in building scalable,
            secure, and high-performance applications, including e-commerce
            platforms, CRM systems, and management software. I enjoy solving
            complex backend challenges and optimizing database performance.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>chaudhryanjali782@gmail.com</p>
            </div>
           
            <div className="contact-detail">
              <img src={github} alt="" />
              <a href="https://github.com/anjalichaudhry" target="_blank" rel="noopener noreferrer" >
              <p>Github</p>
              </a>
            </div>

            <div className="contact-detail">
              <img src={linkedin} alt="" />
              <a href="https://www.linkedin.com/in/anjalichaudhry8690/" target="_blank" rel="noopener noreferrer">
              <p>Linkedin</p>
              </a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Noida , Uttar pardesh</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" id="" placeholder="enter your name" />
          <label htmlFor="">Email</label>
          <input type="text" name="email" id="" placeholder="enter you mail" />
          <label htmlFor="">Write your Message Here</label>
          <textarea
            name="message"
            id=""
            rows="8"
            placeholder="enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
