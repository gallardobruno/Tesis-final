'use client'

import React, { useState, useRef } from "react";
import YouTube from "react-youtube";

const YoutubeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const opts = {
    height: "546",
    width: "896",
    playerVars: {
      autoplay: 0,
      controls: 0,
    },
  };

  return (
    <div>
      <div onClick={togglePlay}>
        <YouTube
          videoId="XR0Yn1Lu3OQ"
          opts={opts}
          onReady={(event) => playerRef.current = event.target}
        />
      </div>
    </div>
  );
};

export default YoutubeVideo;





