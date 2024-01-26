import React from 'react';
import me from '../../assets/images/me2023.JPG';
import Footer from '../Footer';
import Header from '../Header';

const About = () => {
    return (
        <div>
         <Header />
        <section id="about">
        <h2 className='page-header text-center pt-20 text-2xl text-white'>About Me</h2>
        <div className="abtTxt pt-5 flex">
            <img src={me} alt="me" className='me' />
            <div className='about flex flex-col'>
            <p> My name is Andrew Harold Santos and I'm a 25 year old full-stack web developer specializing in react.js and certified by Northwestern University's School of Professional Studies. A full list of the tools I'm experienced with would include : </p>  
            <ul className='unordered-list'>
               <li>Javascript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>HTML</li>
                <li>CSS</li>               
                <li>jQuery</li>
                <li>Git</li>
                <li>Heroku</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>Progressive Web Applications</li>           
                <li>Service Workers</li>
                <li>JSON Web Tokens</li>
                <li>Stripe</li>
                </ul>            
                <p>I'm passionate about ethical solutions to problems and I love to see technology implemented in ways beneficial to humanity. I'm from Chicago, IL and some of my hobbies and interests include staying active and appreciating the outdoors, seeing ideas come to fruition, playing the piano, and basketball, football, and baseball.</p>
                </div>
        </div>
        </section>
        <Footer />
        </div>
    );
    }

export default About;