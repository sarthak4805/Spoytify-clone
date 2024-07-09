 /*import React, { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = track.url;
      if (playStatus) {
        audioRef.current.play();
      }
    }
  }, [track, playStatus]);

  const play = () => {
    if (audioRef.current && !playStatus) {
      audioRef.current.play()
        .then(() => setPlayStatus(true))
        .catch(error => console.error('Error playing audio:', error));
    }
  };

  const pause = () => {
    if (audioRef.current && playStatus) {
      audioRef.current.pause()
        .then(() => setPlayStatus(false))
        .catch(error => console.error('Error pausing audio:', error));
    }
  };

  const updateCurrentTime = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setTime({
        currentTime: {
          second: Math.floor(currentTime % 60),
          minute: Math.floor(currentTime / 60),
        },
        totalTime: {
          second: Math.floor(duration % 60),
          minute: Math.floor(duration / 60),
        },
      });
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateCurrentTime);
      return () => {
        audioRef.current.removeEventListener("timeupdate", updateCurrentTime);
      };
    }
  }, []);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;*/
