import React from "react"
import videojs from 'video.js';

import { setUpVideoControls } from './helpers/setUpVideoControls';
import 'video.js/dist/video-js.css';
import { useState, useEffect, useRef } from 'react';

const playerData = [
  { key: "key1", val: "val1" },
  { key: "key2", val: "val2" },
  { key: "key3", val: "val3" },
]

const UPlayVideoPlayer = ({ src, banner = [] }) => {
  const videoPlayerRef = useRef(null); // Instead of ID
  const [currentTime, setCurrentTime] = useState(null);
  const videoJSOptions = {
    controls: true,
    responsive: true,
    aspectRatio: '4:2',
    userActions: { hotkeys: true },
    inactivityTimeout : 1000,
    playbackRates: [0.5, 1, 1.5, 2]
  };

  useEffect(() => {
    if (videoPlayerRef) {
      const player = videojs(videoPlayerRef.current, videoJSOptions, () => {

        player.on("ended", () => {
          console.log("ended");
        });

        player.on("timeupdate", () => {
          setCurrentTime(player.currentTime());
        });

        setUpVideoControls(player, {
          items: banner
        });

        player.src(src);

      });

    }

    return () => { };
  }, [banner]);

  return (
    <div>
      <video ref={videoPlayerRef} className="video-js" />
      <span>Current Time: {currentTime}</span>
    </div>
  );

}

export default UPlayVideoPlayer;
