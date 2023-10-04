import React from "react";
import CardComponent from "../Cardcomponent/Cardcomponent.jsx";
import NavbarComponent from "../NavbarComponent/NavbarComponent.jsx";
import { Link } from 'react-router-dom';

export default function Studentinit() {
  return (
    <div className="w-full">
      <NavbarComponent />
      <div className="flex flex-row -m-2 justify-center">
        <div className="p-6">
          <Link to="/screenvideo?course=docker">
            <CardComponent
              title="Cantidad de videos"
              subdescription="12 Tracks"
              description="Docker"
              imageSrc="src/assets/images/docker.jpg"
              style={{ margin: "0.5rem" }}
              Trainer="Victor Robles "
            />
          </Link>
          <br />

          <Link to="/screenvideo?course=nodejs">
            <CardComponent
              title="Cantidad de videos"
              subdescription="12 Tracks"
              description="Nodejs"
              imageSrc="src/assets/images/nodejs.jpg"
              Trainer="Fernando Herrera"
              style={{ margin: "0.5rem" }}
            />
          </Link>
        </div>
        <div className="p-4, m-4">
          <Link to="/screenvideo?course=react">
            <CardComponent
              title="Cantidad de videos"
              subdescription="12 Tracks"
              description="React"
              imageSrc="src/assets/images/reactdecero.jpg"
              Trainer="Fernando Herrera"
              style={{ margin: "0.5rem", padding:"0.5rem"}}
            />
          </Link>
          <br />
          <Link to="/screenvideo?course=git">
            <CardComponent
              title="Cantidad de videos"
              subdescription="12 Tracks"
              description="Git"
              imageSrc="src/assets/images/git.jpg"
              Trainer="FapCodYT"
              style={{ margin: "0.5rem" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
