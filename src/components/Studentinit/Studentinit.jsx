import React from "react";
import CardComponent from "../Cardcomponent/Cardcomponent.jsx";
import NavbarComponent from "../NavbarComponent/NavbarComponent.jsx";

export default function Dashboard() {
  return (
    <div className="w-full">
      <NavbarComponent />
      <div className="flex flex-row -m-2 justify-center">
        <div className="flex flex-row flex-col mt-4 mx-auto max-w-md m-4 p-4 ">
          <CardComponent
            title="Cantidad de videos"
            subdescription="12 Tracks"
            description="React"
            imageSrc="src/assets/images/react.jpg"
            Trainer="Victor Robles "
            style={{ margin: "0.5rem" }}
          />
          <br />

          <CardComponent
            title="Cantidad de videos"
            subdescription="12 Tracks"
            description="Git"
            imageSrc="src/assets/images/git.jpg"
            Trainer="FapCodYT"
            style={{ margin: "0.5rem" }}
          />
        </div>

        <div className="flex flex-col  mt-4 mx-auto max-w-md m-10 p-4 ">
          <CardComponent
            title="Cantidad de videos"
            subdescription="12 Tracks"
            description="Java Script"
            imageSrc="src/assets/images/js.jpg"
            style={{ margin: "0.5rem" }}
            Trainer="Victor Robles"
            className="p-4"
          />
          <br></br>
          <CardComponent
            title="Cantidad de videos"
            subdescription="12 Tracks"
            description="React desde cero"
            imageSrc="src/assets/images/reactdecero.jpg"
            Trainer="Fernando Herrera"
            style={{ margin: "0.5rem" }}
          />
        </div>
      </div>
    </div>
  );
}
