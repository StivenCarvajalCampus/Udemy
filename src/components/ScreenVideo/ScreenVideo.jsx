// App.jsx
import React, { useState } from "react";
import ListComponent from "../ListComponent/ListComponent";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const ScreenVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Supongamos que obtienes la lista de temas desde tu consulta al cluster
  const temas = [
    { titulo: "Tema 1", videoSrc: "URL_DEL_VIDEO_1" },
    { titulo: "Tema 2", videoSrc: "URL_DEL_VIDEO_2" },
    // Agrega más temas y enlaces a los videos aquí
  ];

  const seleccionarTema = (tema) => {
    setSelectedVideo(tema.videoSrc);
  };

  return (
    <div className="app">
      <ListComponent temas={temas} seleccionarTema={seleccionarTema} />
      {selectedVideo && <VideoPlayer videoSrc={selectedVideo} />}
    </div>
  );
};

export default ScreenVideo;
