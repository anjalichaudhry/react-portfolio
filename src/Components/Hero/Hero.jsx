import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import profile from '../../assets/profile.jpeg'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero =()=>
{
    return (
        <div id="home" className="hero"> 
       {/* <img src={profile_img} alt=""/> */}
       <img src={profile} alt=""/>
       <h1><span>I'm Anjali,</span> Software Developer</h1>
       <p>I'm backend deloper</p>
       <div className="hero-action">
      <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
      <hero className="hero-resume">My Resume</hero>
       </div>
        </div>
    )
}
export default Hero