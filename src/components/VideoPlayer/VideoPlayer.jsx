// VideoPlayer.jsx
import React from "react";

const VideoPlayer = ({ videoSrc }) => {
  return (
    <div className="video-player">
      <video controls src={videoSrc} />
    </div>
  );
};

export default VideoPlayer;
