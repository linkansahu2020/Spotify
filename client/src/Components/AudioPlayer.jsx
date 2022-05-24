import React, { useState, useRef, useEffect, useCallback } from 'react'
import styles from "../styles/AudioPlayer.module.css";
import { FaPlay } from "react-icons/fa"
import { FaPause,FaStepForward,FaStepBackward } from "react-icons/fa"
import { BsArrowRepeat } from 'react-icons/bs'
import { IoShuffleOutline } from 'react-icons/io5'
import { useDispatch, useSelector} from 'react-redux'
import { Name, SpecialContainer } from './Home';
import { AiOutlineLike } from 'react-icons/ai'
import { addCurrentPlaying, addIndex } from '../Redux/action';

export default function AudioPlayer(){
  const dispatch = useDispatch();

  const audio = useSelector((state)=>state.current_playing)
  const audioList = useSelector((state)=>state.current_playing_list)
  const index = useSelector((state)=>state.index)

  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentColor,setCurrentColor] = useState(false);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  const changePlayerCurrentTime = useCallback(() => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  },[duration])

  const nextSong = useCallback(()=>{
    audioPlayer.current.pause();
    dispatch(addCurrentPlaying(audioList[(index+1) % audioList.length]));
    dispatch(addIndex((index+1) % audioList.length));
  },[audioList,index,dispatch])

  const prevSong = () => {
    audioPlayer.current.pause();
    if(index<=0){
      dispatch(addCurrentPlaying(audioList[audioList.length-1]));
      dispatch(addIndex(audioList.length-1))
    } else{
      dispatch(addCurrentPlaying(audioList[index-1]));
      dispatch(addIndex(index-1))
    }
  }

  const whilePlaying = useCallback(()=>{
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
    if(progressBar?.current?.max===progressBar?.current?.value) nextSong();
  },[changePlayerCurrentTime,nextSong])

  useEffect(()=>{
    if(audio.audio){
      setIsPlaying(true);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  },[audio?.audio,whilePlaying])

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

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const playingAudio = ()=>{
    return (
      <>
      {audio?.audio?
      <SpecialContainer style={{background:'transparent'}}>
        <img src={audio.image} alt=""  />
        <Name style={{width: 'auto', lineHeight:'11px'}}>
          <div style={{display: 'flex', gap:'15px',alignItems: 'center'}}>
            <p>{audio.title}</p>
            <AiOutlineLike style={{fontSize:'17px',color:`${currentColor?'#00b24a':'white'}`}} onClick={()=>setCurrentColor(prev=>!prev)}/>
          </div>
          <span style={{color: 'grey', fontSize: '13px', fontWeight: 'normal', cursor: 'pointer'}}>{audio.artist.name}</span>
        </Name>
      </SpecialContainer>:null}
      </>
    )
  }

  // const backThirty = () => {
  //   progressBar.current.value = Number(+progressBar.current.value - 30);
  //   changeRange();
  // }

  // const forwardThirty = () => {
  //   progressBar.current.value = Number(+progressBar.current.value + 30);
  //   changeRange();
  // }

  return (
    <div className={styles.audioPlayer}>
        <div className={styles.playingItem}>{playingAudio()}</div>
        <div className={styles.progressBarButtons}>
            <audio ref={audioPlayer} src={audio.audio} preload="metadata"></audio>
            <div className={styles.allControlledButton}>
                <button className={styles.forwardBackward}><IoShuffleOutline /></button>
                <button className={styles.forwardBackward} onClick={prevSong}><FaStepBackward /></button>
                <button onClick={togglePlayPause} className={styles.playPause}>
                    {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
                </button>
                <button className={styles.forwardBackward} onClick={nextSong}><FaStepForward /></button>
                <button className={styles.forwardBackward} onClick={()=>setIsRepeat(prev=>!prev)}><BsArrowRepeat/>{isRepeat?'.':null}</button>
            </div>
            <div className={styles.rangeBar}>
                <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

                <div style={{width: '90%', display: 'flex', alignItems:'center'}}>
                    <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
                </div>

                <div className={styles.duration}>{(duration && !isNaN(duration)) ? calculateTime(duration) : '00:00'}</div>
            </div>
        </div>
        <div className={styles.actionKeys}>hellokxjs</div>
    </div>
  )
}