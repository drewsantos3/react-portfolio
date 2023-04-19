import Me from '../images/me.PNG';
import Header from './Header';
import Footer from './Footer';

const About = () => {
    return (
        <div>
        <Header />
        <div className="about">
            <h1>About Me</h1>
            <img src={Me} alt="me" />
            <p>
            Welcome to my Portfolio! My name is Andrew Santos and I'm a 24 year old full-stack web developer specializing in react and javascript. I'm
            passionate about problem solving and creating beautiful and functional websites and
            applications. I'm from Chicago, IL  and in my free time I enjoy staying active, watching basketball, and playing video games.
            </p>
        </div>
        <Footer />
        </div>
    );
    }

export default About;