import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TypeWriterEffect from 'react-typewriter-effect'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='home text-white'>
                <p className="tagline text-center text-5xl pt-5 px-10">
                    Developer, Problem Solver, Tech Enthusiast
                    <br></br>
                    <TypeWriterEffect
                    textStyle={{
                        color: '#16a34a',
                        margin: '10px 0',
                        textAlign: 'center'
                    }}
                    startDelay={500}
                    cursorColor='transparent'
                    text="Welcome to my Portfolio!"
                    typeSpeed={100}
                    curso
                    />
                        </p>
                     <div className = "intro text-4xl leading-relaxed">
                    <TypeWriterEffect 
                    textStyle={{
                        color: 'white',
                        backgroundColor: 'gray',
                        background: 'rgba(0, 0, 0, 0.5)',
                        maxWidth: '75%',
                        margin: '10px 0',
                    }}
                    startDelay={3400}
                    cursorColor='transparent'
                    text="I am a Full Stack Developer with a passion for building web applications."
                    typeSpeed={50}
                    />
                    <TypeWriterEffect
                    textStyle={{
                        color: 'white',
                        backgroundColor: 'gray',
                        background: 'rgba(0, 0, 0, 0.5)',
                        maxWidth: '75%',
                        margin: '10px 0',
                    }}
                    startDelay={8000}
                    cursorColor='transparent'
                    text="With hands on experience in Javascript, React, GraphQL, etc, I have built numerous projects from the ground up."
                    typeSpeed={35}
                    />
                    <br></br>
                    <TypeWriterEffect
                    textStyle={{
                        color: 'white',
                        backgroundColor: 'gray',
                        background: 'rgba(0, 0, 0, 0.5)',
                        maxWidth: '75%',
                        margin: '10px 0',
                    }}
                    startDelay={13000}
                    cursorColor='transparent'
                    text="Click below to learn more about me, or use the navigation bar above to view my projects and contact me. Click my name at the top to return to this page."
                    typeSpeed={20}
                    />
                    </div>
                <Link to="/about" className='aboutLink text-2xl'>Click here to learn more about me!</Link>
            </div>
            <Footer />
        </div>
    );
}

export default Home;