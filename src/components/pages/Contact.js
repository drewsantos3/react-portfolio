
import Header from '../Header';
import Footer from '../Footer';
import ghLogo from '../../assets/images/github-mark.png';
import liLogo from '../../assets/images/linkedin.png';
import React, { useState } from "react";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }


    return (
        <div>
        <Header />
        <section id="contact" className='text-white'>
            <h2 className='text-center p-5 text-2xl'>Contact Me</h2>
            <form className='flex flex-col justify-center items-center'
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="pt-10 mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="focus:outline-none focus:ring relative px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          className="focus:outline-none focus:ring relative px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-none focus:ring relative pr-10 pb-20 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
          type="submit"
        >
          Send message
        </button>
    </div>
    </form>
    <h2 className='text-center p-5 text-2xl'>Or find me on:</h2>
    <div className='pb-10 flex justify-center items-center'>
            <a href="https://github.com/drewsantos3" className="text-2xl text-left p-4">
              <img src={ghLogo} alt='github logo' className="h-20 w-20"></img>
            </a>
            <a href="https://www.linkedin.com/in/drew-santos1" className="text-2xl text-right p-4">
              <img src={liLogo} alt='linkedin logo' className="h-20 w-20"></img>
            </a>
            </div>
      </section>
       <Footer />
  </div>
  );
};

export default Contact;