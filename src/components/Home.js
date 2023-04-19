import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Andrew Santos</h1>
                <p>Full Stack Web Developer</p>
                <p>React, Node, Express, MongoDB</p>
                <Link to="/about">About</Link>
            </main>
            <Footer />
        </div>
    );
}

export default Home;