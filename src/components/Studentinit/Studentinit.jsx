import React, { useEffect, useState } from "react";
import CardComponent from "../Cardcomponent/Cardcomponent.jsx";
import NavbarComponent from "../NavbarComponent/NavbarComponent.jsx";
import axios from "axios";
export default function Dashboard() {
  const [courses, setData] = useState({});
  useEffect(() => {
    const renderCourses = async () => {
      const data = await axios.get(
        `http://192.168.128.23:5010/cursos/filter?course=react&section=1`
      );
      setData(response.data);
    };
    renderCourses();
  }, []);
  console.log(courses);
  return (
    <div className="w-full">
      <NavbarComponent />
      <div className="flex flex-row -m-2 justify-center">
        <div className="flex flex-row flex-col mt-4 mx-auto max-w-md m-4 p-4 ">
           <CardComponent
            title="Cantidad de videos"
            subdescription="12 Tracks"
            description={sectionName}
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
          { courses.data &&
            <CardComponent
              title={courses.data.sectionName}
              subdescription="12 Tracks"
              description="Git"
              imageSrc="src/assets/images/git.jpg"
              Trainer="FapCodYT"
              style={{ margin: "0.5rem" }}
            />
          }
        </div>
      </div>
    </div>
  );
}
