import React, { useState } from 'react';
import YouTube from 'react-youtube';

const Video = () => {
  const [setPlayer] = useState(null);
  const opts = {
    height: '315',
    width: '560',
    playerVars: {
      autoplay: 1,
    },
  };
  
  const onReady = (event) => {
    setPlayer(event.target);
  }

  return (
    <YouTube videoId="W2f1cKL13xc" opts={opts} onReady={onReady} />
  );
}

export default Video;
