import React from 'react'
import "./about.css"
import AboutImg from "../../assets/about.jpg"
import Resume from "../../assets/resume.pdf"
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">A brief introduction on who I am</span>
       
       <div className="about__container container grid">
            <img src={AboutImg} alt="about" className="about__img" />
       
            <div className="about__data">
                <Info /> 
                <p className="about__description">
                Born in Canada, raised in Hong Kong. <br />
                Currently residing in Tokyo, Japan. <br /><br />
                I started learning full-stack web development in Oct 2022 at Le Wagon because I want to create my own websites and apps. I enjoy working on projects as a team, especially designing and building user interface.
               </p>

               <a download ="" href={Resume} className="button button-flex">Resume</a>
            </div>
       </div>

    </section>
  )
}

export default About