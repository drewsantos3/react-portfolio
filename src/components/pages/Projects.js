import Header from "../Header";
import Footer from "../Footer";
import Attak from "../../assets/images/attakpage.png";
import Bikes from "../../assets/images/bikes4U.png";
import Ocean from "../../assets/images/oceanBuddies.png";
import gitHubLogo from "../../assets/images/github-mark.png";
import linkSymbol from "../../assets/images/linkSymbol.png";

const projects = [
  {
    name: "Attak Tracker",
    desc: "A full stack app that allows users to create workouts.",
    img: Attak,
    link: "https://attak-tracker.herokuapp.com/login",
    github: "https://github.com/attak5/attak-tracker.git",
  },
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
];
//          <img src={Attak} alt="Attak" />
//           <div className="project-info">
//             <h2>Attak Tracker</h2>
//             <p>
//               Attak Tracker is a full stack web application that allows users to create
//               workouts. Users can create workouts and add exercises to those workouts. The application is built using React, Node, Express, and MongoDB.
//             </p>
//             <a
//               href="https://attak-tracker.herokuapp.com/login"> click here for deployed app</a>
//             <a
//               href="https://github.com/attak5/attak-tracker.git">click here for github repo</a>
//             </div>
//         </div>
//         <div className="project">
//             <img src={Bikes} alt="Bikes4U" />
//             <div className="project-info">
//                 <h2>Bikes4U</h2>
//                 <p>
//                     Bikes4U is a full stack web application that allows users to locate nearby bike stations in their local area.
//                      Whether a user wishes to rent or return a bike, there has never before been a more streamlined method to find and navigate to a station that will contain the amount of needed bikes or empty slots. This will, in turn, aid in reducing emissions in metropolitan areas across the globe.
//                 </p>
//                 <a 
//                 href="https://team-a2c2e.github.io/Bikes4U/">click here for deployed app</a>
//                 <a
//                 href="https://github.com/Team-A2C2E/Bikes4U.git">click here for github repo</a>
//             </div>
//         </div>
//         <div className="project">
//             <img src={Ocean} alt="Ocean Buddies" />
//             <div className="project-info">
//                 <h2>Ocean Buddies</h2>
//                 <p>
//                 A website for a ocean preservation charity that allows you to donate, volunteer, or purchase items with all money going towards the charity. The website includes a news section if you log in!
//                 </p>
//                 <a
//                 href="https://ocean-buddies.herokuapp.com/">click here deployed app</a>
//                 <a
//                 href="https://github.com/Oceans-4/Ocean-App.git">click here github repo</a>
//             </div>
//         </div>
//         </main>
//         <Footer />
//     </div>

//     );
// };

export default function Project() {
  return (
    <div>
      <Header />
      <main section id="projects">
        <h2 className='text-center pt-5 text-2xl text-white'>My Projects</h2>
        <div className="flex flex-wrap justify-center pt-10 m-10">
          {projects.map((project, i) => {
            return (
              <div key={`project_${i}`} className="flex flex-col justify-evenly project-card pulse border-double border-8 border-[#0b132b] rounded-lg w-96 h-96 m-4 bg-white p-2">
              <h2 className="text-2xl font-bold text-center">{project.name}</h2>
              <p className="text-center">{project.desc}</p>
              <div className="border-double border-8 border-[#0b132b] rounded-lg">
                <img src={project.img} alt="screenshot of application" />
              </div>
              <div className="flex justify-center gap-4">
                <div className="project-links wiggle tooltip">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={linkSymbol} alt="internet link symbol" />
                    <span class="tooltiptext">Deployed Application</span>
                  </a>
                </div>
                <div className="project-links wiggle tooltip">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <img src={gitHubLogo} alt="GitHub logo" />
                    <span className="tooltiptext">GitHub Repository</span>
                  </a>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </main>
      <Footer />
    </div>
  )
}