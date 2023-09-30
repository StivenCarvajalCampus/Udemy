// App.jsx
import React, { useState, useEffect } from "react";
import ListComponent from "../ListComponent/ListComponent";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import SectionList from "../SectionList/SectionList";
import axios from "axios";
const ScreenVideo = () => {
  const [courses, setData] = useState({});
  useEffect(() => {
    const renderCourses = async () => {
      const data = await axios.get(
        `http://192.168.128.23:5010/cursos/filter?course=react&section=1`
      );
      setData(data);
    };
    renderCourses();
  }, []);
  //console.log(courses);

  const [selectedVideo, setSelectedVideo] = useState(null);



  return (
    <div className="app">
      <SectionList />
      {selectedVideo && <VideoPlayer videoSrc={selectedVideo} />}
      
    </div>
  );
};

export default ScreenVideo;
