import React from 'react';
import Me from '../images/me.PNG';

const About = () => {
    return (
        <section id="about" className='m-6'>
        <div className="about">
            <h1>About Me</h1>
            <img src={Me} alt="me" />
            <p>
            Welcome to my Portfolio! My name is Andrew Santos and I'm a 24 year old full-stack web developer specializing in react and javascript. I'm
            passionate about problem solving and creating beautiful and functional websites and
            applications. I'm from Chicago, IL  and in my free time I enjoy staying active, playing the piano, watching basketball, and playing video games.
            </p>
        </div>
        </section>
    );
    }

export default About;