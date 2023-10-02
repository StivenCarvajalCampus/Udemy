import CardComponent from "../Cardcomponent/Cardcomponent.jsx";
import NavbarComponent from "../NavbarComponent/NavbarComponent.jsx";
import axios from "axios";
export default function Dashboard() {
  
  return (
    <div className="w-full">
      <NavbarComponent />
      <div className="flex flex-row -m-2 justify-center">
        <div className="flex flex-row flex-col mt-4 mx-auto max-w-md m-4 p-4 ">
          <CardComponent
            title="Cantidad de videos"
            subdescription="12 Tracks"
            description=""
            imageSrc="src/assets/images/react.jpg"
            style={{ margin: "0.5rem" }}
            Trainer="Victor Robles "
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
        <div>
          <CardComponent
            title=""
            subdescription="12 Tracks"
            description="Git"
            imageSrc="src/assets/images/git.jpg"
            Trainer="FapCodYT"
            style={{ margin: "0.5rem", padding:"0.5rem"}}
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
      </div>
    </div>
  );
}
