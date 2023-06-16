import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='relative'>
                <p className="text-center font-bold text-5xl pt-10 px-10">
                    Developer, Problem Solver, Tech Enthusiast
                    <br></br>
                    <span className="text-[#16a34a] type-writer">Welcome to my Portfolio!</span>
                        </p>
                <p>React, Node, Express, MongoDB</p>
                <Link to="/about">About</Link>
            </div>
            <Footer />
        </div>
    );
}

export default Home;