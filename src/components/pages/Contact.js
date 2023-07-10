
import Header from '../Header';
import Footer from '../Footer';
import ghLogo from '../../assets/images/github-mark.png';
import liLogo from '../../assets/images/linkedin.png';

const Contact = () => {
    return (
        <div>
        <Header />
        <section id="contact" className='text-white'>
            <h2 className='text-center p-5 text-2xl'>Contact Me</h2>
            <div className="pt-20 flex flex-col">
          <div className="myinfo flex justify-center">
            <div>
              <p className="text-2xl font-bold text-right p-4">EMAIL:</p>
              <p className="text-2xl font-bold text-right p-4">PHONE:</p>
              <p className="text-2xl font-bold text-right p-4">CITY, STATE, ZIP:</p>
            </div>
            <div>
              <p className="text-2xl text-left p-4">drewsantos3@gmail.com</p>
              <p className="text-2xl text-left p-4">312-521-9832</p>
              <p className="text-2xl text-left p-4">Chicago, Illinois 60611</p>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <a href="https://github.com/drewsantos3" className="text-2xl text-left p-4">
              <img src={ghLogo} alt='github logo' className="h-20 w-20"></img>
            </a>
            <a href="https://www.linkedin.com/in/drew-santos1" className="text-2xl text-right p-4">
              <img src={liLogo} alt='linkedin logo' className="h-20 w-20"></img>
            </a>
          </div>
        </div>
      </section>
       <Footer />
    </div>
  );
};

export default Contact;