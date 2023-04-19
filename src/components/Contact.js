import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
    return (
        <div>
        <Header />
        <div className="contact">
            <h1>Contact Me</h1>
            <p>
            If you'd like to get in touch with me, please feel free to reach out to me via email at <a href="mailto: drewsantos3@gmail.com">drewsantos3@gmail.com</a> or by phone at <a href="tel: 312-521-9832">312-521-9832</a>
            </p>
            <p>
            You can also find me on <a href="https://www.linkedin.com/in/andrew-santos-5a1372247/" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
            <p>
            <Link to="/">Back to Home</Link>
            </p>
        </div>
        <Footer />
        </div>
    )
}

export default Contact;