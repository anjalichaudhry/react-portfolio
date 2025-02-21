import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from '../../assets/profile.jpeg'
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          {/* <img src={profile_img} alt="" /> */}
          <img src={profile} alt=""/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a passionate backend developer with expertise in Java (Spring
              Boot),PHP (Laravel), and MySQL. I specialize in building scalable,
              secure, and high-performance applications, including e-commerce
              platforms, CRM systems, and management software. I enjoy solving
              complex backend challenges and optimizing database performance.
            </p>
            <p>
              Backend Development: Building robust server-side applications.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java & Spring Boot</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Php & Laravel</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>HTML5 & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript & React</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>MySql & Oops</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-archivments">
        <div className="about-archivment">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-archivment">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-archivment">
          <h1>4+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};
export default About;
