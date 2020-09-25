import React from "react";
import AboutHeader from "../AboutHeader";
import "./style.css"

function About() {
    return (
    <>
    <AboutHeader />
    <section className="container"> 
        <section className="myBio">
        <section className="container" id="headshotContainer">  
          <img src="assets/RH4340.jpg" alt="Picture of Female Smiling" className="img-fluid" id="headshot"/>
          </section>
          <p><b>
            <br></br>
            Having completed my undergraduate degree studies at New York University, I moved back to Philadelphia to work in social services as a youth counselor in the hopes of putting my degrees to use. After six years of social work (and so many heartfelt, inspiring, and traumatic anecdotes to fill the walls of the Bodleian Library!), I'm now seeking a position as a full stack web developer.</b></p>
          <p><b>I'm looking forward to coding for you!</b></p>
          <br></br>
          <div className="socialIcons" id="socialIcons">
          <a href="https://github.com/rh9891" target="_blank"><img src="assets/githubLogo.png" alt="Github Logo"/></a>
          <a href="https://docs.google.com/document/d/1sDxK6bB5T72BncLHZVYwIBZ-NCHIX9oRrvebN9T21bc/edit?usp=sharing" target="_blank"><img src="assets/magnifyingGlassLogo.png" alt="Magnifying Glass Logo" id="magnifyingLogo"/></a>
          <a className="float-left linkedIn" href="https://www.linkedin.com/in/romie-hecdivert-a75a181a8/" target="_blank"><img src="assets/linkedInLogo.png" alt="LinkedIn Logo"/></a>
        </div>
        </section>
    </section>
    </>
)
}

export default About;