import React, { useState, useRef, useEffect } from 'react'
import styles from "../styles/AudioPlayer.module.css";
import { FaPlay } from "react-icons/fa"
import { FaPause,FaStepForward,FaStepBackward } from "react-icons/fa"
import { BsArrowRepeat } from 'react-icons/bs'
import { IoShuffleOutline } from 'react-icons/io5'

export default function AudioPlayer(){
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  }

  return (
    <div className={styles.audioPlayer}>
        <div className={styles.playingItem}>hello</div>
        <div className={styles.progressBarButtons}>
            <audio ref={audioPlayer} src={"https://pwdown.com/113636/Main%20Ki%20Karaan%20-%20Laal%20Singh%20Chaddha.mp3"} preload="metadata"></audio>
            <div className={styles.allControlledButton}>
                <button className={styles.forwardBackward} onClick={backThirty}><IoShuffleOutline /></button>
                <button className={styles.forwardBackward} onClick={backThirty}><FaStepBackward /></button>
                <button onClick={togglePlayPause} className={styles.playPause}>
                    {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
                </button>
                <button className={styles.forwardBackward} onClick={forwardThirty}><FaStepForward /></button>
                <button className={styles.forwardBackward} onClick={forwardThirty}><BsArrowRepeat /></button>
            </div>
            <div className={styles.rangeBar}>
                {/* current time */}
                <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

                {/* progress bar */}
                <div style={{width: '90%', display: 'flex', alignItems:'center'}}>
                    <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
                </div>

                {/* duration */}
                <div className={styles.duration}>{(duration && !isNaN(duration)) ? calculateTime(duration) : '00:00'}</div>
            </div>
        </div>
        <div className={styles.actionKeys}>hellokxjs</div>
    </div>
  )
}