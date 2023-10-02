import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SectionList() {
  const [courses, setCourses] = useState([]); // Inicializa courses como un array vacío

  useEffect(() => {
    const renderCourses = async () => {
      try {
        const response = await axios.get(
          "http://192.168.128.23:5010/cursos/filter?course=react&section=1"
        );
        //console.log(response.data.videos);
        setCourses(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    renderCourses();
  }, []);

  return (
    <div>
      {(courses.sectionName != undefined) ? (
        <details>
          <summary style={{ color: 'white' }}>{courses.sectionName}</summary>
          {courses.videos.map((element, index) => {
            let video = Object.values(element)[0];
            return (<div style={{color: 'white'}}
             key={index}>
                {video.Titulo}

            </div>)

          })}
        </details>
      ) : (
        <div>Cargando datos...</div>
      )}
    </div>
  );
}
