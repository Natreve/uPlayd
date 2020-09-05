import React from "react"
import videojs from 'video.js';

import { setUpVideoControls } from './helpers/setUpVideoControls';
import 'video.js/dist/video-js.css';
import { useState, useEffect, useRef } from 'react';



const UPlayVideoPlayer = ({ src, banner = [] }) => {
  const videoPlayerRef = useRef(null); // Instead of ID
  const [currentTime, setCurrentTime] = useState(null);
  const [initializedPlayer, setInitializedPlayer] = useState(false);

  useEffect(() => {

    const videoJSOptions = {
      controls: true,
      responsive: true,
      aspectRatio: '4:2',
      userActions: { hotkeys: true },
      inactivityTimeout: 1000,
      playbackRates: [0.5, 1, 1.5, 2]
    };

    if (videoPlayerRef) {
      if (!initializedPlayer) {
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
          setInitializedPlayer(true);
        });
      }
    }

    return () => { };
  }, [banner, src, initializedPlayer]);

  return (
    <div>
      <video ref={videoPlayerRef} className="video-js" />
      <span>Current Time: {currentTime}</span>
    </div>
  );

}

export default UPlayVideoPlayer;
