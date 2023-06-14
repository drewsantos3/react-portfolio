import Header from "../Header";
import Footer from "../Footer";
import Attak from "../../assets/images/attakpage.png";
import Bikes from "../../assets/images/bikes4U.png";
import Ocean from "../../assets/images/oceanBuddies.png";

const Projects = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Projects</h1>
        <div className="project">
          <img src={Attak} alt="Attak" />
          <div className="project-info">
            <h2>Attak Tracker</h2>
            <p>
              Attak Tracker is a full stack web application that allows users to create
              workouts. Users can create workouts and add exercises to those workouts. The application is built using React, Node, Express, and MongoDB.
            </p>
            <a
              href="https://attak-tracker.herokuapp.com/login"> click here for deployed app</a>
            <a
              href="https://github.com/attak5/attak-tracker.git">click here for github repo</a>
            </div>
        </div>
        <div className="project">
            <img src={Bikes} alt="Bikes4U" />
            <div className="project-info">
                <h2>Bikes4U</h2>
                <p>
                    Bikes4U is a full stack web application that allows users to locate nearby bike stations in their local area.
                     Whether a user wishes to rent or return a bike, there has never before been a more streamlined method to find and navigate to a station that will contain the amount of needed bikes or empty slots. This will, in turn, aid in reducing emissions in metropolitan areas across the globe.
                </p>
                <a 
                href="https://team-a2c2e.github.io/Bikes4U/">click here for deployed app</a>
                <a
                href="https://github.com/Team-A2C2E/Bikes4U.git">click here for github repo</a>
            </div>
        </div>
        <div className="project">
            <img src={Ocean} alt="Ocean Buddies" />
            <div className="project-info">
                <h2>Ocean Buddies</h2>
                <p>
                A website for a ocean preservation charity that allows you to donate, volunteer, or purchase items with all money going towards the charity. The website includes a news section if you log in!
                </p>
                <a
                href="https://ocean-buddies.herokuapp.com/">click here deployed app</a>
                <a
                href="https://github.com/Oceans-4/Ocean-App.git">click here github repo</a>
            </div>
        </div>
        </main>
        <Footer />
    </div>

    );
};

export default Projects;


