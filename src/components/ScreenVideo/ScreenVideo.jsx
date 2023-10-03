import { useEffect, useState } from "react";
import "./ScreenVideo.css";
import NavbarComponent from "../NavbarComponent/NavbarComponent";

function Secciones() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState("");
  const [selectedSectionNumber, setSelectedSectionNumber] = useState(1); // Inicialmente, selecciona la primera sección

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://192.168.128.23:5010/cursos/?course=git"
        );
        if (!response.ok) {
          throw new Error("No se pudo cargar la información desde la API");
        }
        const jsonData = await response.json();
        setData(Object.values(jsonData));
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar datos desde la API:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  const MIFUNCION = (title) => {
    setSelectedVideoTitle(title);
  };

  const handleSummaryClick = (sectionNumber) => {
    setSelectedSectionNumber(sectionNumber);
    setSelectedVideoTitle("");
  };
  return (
    <div className="w-full">
      <NavbarComponent />
      <div className="video-section">
        <div className="video-container">
          {selectedVideoTitle && (
            <div>
              <video
                autoPlay
                src={`http://192.168.128.23:5010/cursos/play?course=git&seccion=${selectedSectionNumber}&video=${selectedVideoTitle}`}
                width="820"
                height="640"
                controls
              />
            </div>
          )}
        </div>
        <div className="dark:bg-default-100/50 flex justify-end sections-container">
          <h1>Aprende Git:</h1>
          <div className="contenido text-white p-8">
            {data.map((section, i) => {
              const sectionNumber = i + 1;
              const videos = section.videos;
              return (
                <div key={i} className="custom-container">
                  <details
                    className="bg-black-500"
                    open={sectionNumber === selectedSectionNumber}
                  >
                    <summary
                      className="p-5"
                      onClick={() => handleSummaryClick(sectionNumber)}
                    >
                      <div className="custom-div">{section.sectionName}</div>
                    </summary>

                    <div className="videos">
                      {videos.map((videoObj, index) => {
                        const video = Object.values(videoObj)[0];
                        return (
                          <div key={index}>
                            <button
                              className="custom-button"
                              onClick={() => MIFUNCION(video.video)}
                            >
                              {video.Titulo}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secciones;
