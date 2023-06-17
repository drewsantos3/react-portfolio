import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TypeWriterEffect from 'react-typewriter-effect'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='home text-white'>
                <p className="text-center text-5xl pt-5 px-10">
                    Developer, Problem Solver, Tech Enthusiast
                    <br></br>
                    <TypeWriterEffect
                    textStyle={{
                        color: '#16a34a',
                        margin: '10px 0',
                        textAlign: 'center'
                    }}
                    startDelay={500}
                    cursorColor='white'
                    text="Welcome to my Portfolio!"
                    typeSpeed={100}
                    />
                        </p>
                <p>React, Node, Express, MongoDB</p>
                <Link to="/about">About</Link>
            </div>
            <Footer />
        </div>
    );
}

export default Home;