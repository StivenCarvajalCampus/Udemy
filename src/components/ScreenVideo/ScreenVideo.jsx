  /* eslint-disable react-hooks/rules-of-hooks */
  import { Avatar, Textarea } from "@nextui-org/react";
  import { useEffect, useState } from "react";
  import { useLocation } from "react-router-dom";
  import NavbarComponent from "../NavbarComponent/NavbarComponent";
  import "./ScreenVideo.css";

  function Secciones() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedVideoTitle, setSelectedVideoTitle] = useState("");
    const [selectedSectionNumber, setSelectedSectionNumber] = useState(1); // Inicialmente, selecciona la primera sección
    //Obtener Usuario id
    const location = useLocation();
    const userId = new URLSearchParams(location.search).get("userId");
    const [userData, setUserData] = useState({});
    //Obtener curso
    const selectedCourse = new URLSearchParams(location.search).get("course");

    useEffect(() => {

      if (userId) {
        fetch(`http://localhost:5087/user/${userId}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setUserData(data);
          })
          .catch((error) => {
            console.error("Error al obtener los datos del usuario: ", error);
          });
      }
    }, [userId]);
    //https://cdn.discordapp.com/avatars/606870241720401959/dcc4677ea230feaa46fc8a3810a6d08a.png
    console.log(userData.avatar);
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(
            `http://192.168.128.23:5010/cursos/?course=${selectedCourse}`
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
    }, [selectedCourse]);

    if (loading) {
      return <p>Cargando...</p>;
    }

    const MIFUNCION = (title) => {
      setSelectedVideoTitle(title);
    };

    const handleSummaryClick = (sectionNumber) => {
      setSelectedSectionNumber(sectionNumber);
      setSelectedVideoTitle("");
    };/* 
    const [commentText, setCommentText] = useState("");

    const handleCommentSubmit = async () => {
      if (!commentText) {
        return; 
      }

      
      const newComment = {
        text: commentText,
        userId: userId, 
      };
      try {
        const response = await fetch("http://localhost:5087/comentarios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }); if (response.ok) {
          console.log("Comentario guardado exitosamente");
          setCommentText(""); 
        } else {
          console.error("Error al guardar el comentario en el backend");
        }
      } catch (error) {
        console.error("Error de red al enviar el comentario:", error);
      }
    }; */
    return (
      <div className="w-full h-screen flex flex-col">
        <NavbarComponent />
        <div className="video-section">
          <div className="video-container">
            {selectedVideoTitle && (
              <div>
                <video
                  autoPlay
                  src={`http://192.168.128.23:5010/cursos/play?course=${selectedCourse}&seccion=${selectedSectionNumber}&video=${selectedVideoTitle}`}
                  width="820"
                  height="640"
                  controls
                />
              </div>
            )}
          </div>
          <div className=" flex justify-end sections-container">
            <h1 className="flex justify-center text-white font-bold">Aprende {selectedCourse}:</h1>
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
        <div className="flex justify-between place-items-center md:grid-cols-5 md:grid-rows-2 grid-cols-2 gap-2">
          <div className="flex justify-start w-auto p-5">
            {userData.avatar ? (
              <Avatar
                isBordered
                className="transition-transform"
                color="secondary"
                name={userData.username}
                size="sm"
                src={`https://cdn.discordapp.com/avatars/${userData.discordId}/${userData.avatar}.png`}
              />
            ) : (
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={userData.username}
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            )}
          </div>
          <Textarea

            isRequired
            label="Comments"
            labelPlacement="outside"
            placeholder="Enter your Comment"
            className="col-span-4 h-full"
          /* value={commentText}
          onChange={(e) => setCommentText(e.target.value)} // Actualizar el estado del texto del comentario */

          />
          {/* <button onClick={handleCommentSubmit}>Enviar Comentario</button> */}
        </div>
      </div>

    );
  };

  export default Secciones;