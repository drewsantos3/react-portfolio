import React from 'react';
import me from '../../assets/images/me.PNG';
import Footer from '../Footer';
import Header from '../Header';

const About = () => {
    return (
        <div>
         <Header />
        <section id="about" className='m-6'>
        <div className="about">
            <h1>About Me</h1>
            <img src={me} alt="me" />
            <p>
            Welcome to my Portfolio! My name is Andrew Santos and I'm a 24 year old full-stack web developer specializing in react and javascript. I'm
            passionate about problem solving and creating beautiful and functional websites and
            applications. I'm from Chicago, IL  and in my free time I enjoy staying active, playing the piano, watching basketball, and playing video games.
            </p>
        </div>
        </section>
        <Footer />
        </div>
    );
    }

export default About;