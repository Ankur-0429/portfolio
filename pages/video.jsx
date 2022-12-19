
import React from "react";
import ReactPlayer from "react-player";
import useWindowSize from "../hooks/WindowSize";

const VideoPlayer = () => {
  const size = useWindowSize();
  return (
    <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width={size.width} height={size.height} playing={true} loop={true} controls={false} />
  );
};

export default VideoPlayer;
