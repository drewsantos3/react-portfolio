import Header from "../Header";
import Footer from "../Footer";
import Bikes from "../../assets/images/bikes4U.png";
import Ocean from "../../assets/images/oceanBuddies.png";
import gitHubLogo from "../../assets/images/github-mark.png";
import linkSymbol from "../../assets/images/linkSymbol.png";
import weatherSS from "../../assets/images/weatherSS.png";
import ecomSS from "../../assets/images/ecomSS.png";

const projects = [
  {
    name: "Bikes4U",
    desc: "A full stack app that allows users to locate nearby bike stations in their local area.",
    img: Bikes,
    link: "https://team-a2c2e.github.io/Bikes4U/",
    github: "https://github.com/Team-A2C2E/Bikes4U.git",
  },
  {
    name: "Ocean Buddies",
    desc: "A website for an ocean preservation charity that allows users to donate, volunteer, or purchase items.",
    img: Ocean,
    link: "https://ocean-buddies.herokuapp.com/",
    github: "https://github.com/Oceans-4/Ocean-App.git",
  },
  {
    name: "Weather App",
    desc: "A weather app that allows users to search for a city and see the current weather and 5 day forecast.",
    img: weatherSS,
    link: "https://drewsantos3.github.io/weather-dashboard/",
    github: "https://github.com/drewsantos3/weather-dashboard.git",
  },
  {
    name: "E-Commerce Backend",
    desc: "A backend for an e-commerce site that uses Express.js and Sequelize to interact with a MySQL database.",
    img: ecomSS,
    link: "https://drive.google.com/file/d/1HKzPCt23tantXZKZMFuLsLbL7f1IuH3v/view?usp=sharing",
    github: "https://github.com/drewsantos3/e-commerce-backend.git",
  }
];

export default function Project() {
  return (
    <div>
      <Header />
      <main section id="projects">
        <h2 className='text-center pt-5 text-2xl text-white'>My Projects</h2>
        <div className='flex flex-col justify-center items-center'>
          {projects.map((project) => (
            <div className='project-card flex flex-col justify-center items-center'>
              <h3 className='text-center text-white text-xl p-5 pt-10'>{project.name}</h3>
              <img src={project.img} alt={project.name} className='w-1/2' />
              <div className='bg-white w-1/2'>
              <p className='text-center text-black p-3'>{project.desc}</p>
              <div className='flex justify-center items-center'>
                <div className="project-links wiggle tooltip">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={linkSymbol} alt="link" className='w-10 m-3' />
                  <span className='tooltiptext'>Demo</span>
                </a>
                </div>
                <div className="project-links wiggle tooltip">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <img src={gitHubLogo} alt="github" className='w-10' />
                  <span className='tooltiptext'>GitHub Repo</span>
                </a>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}