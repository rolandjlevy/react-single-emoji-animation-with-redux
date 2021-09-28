import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import store from '../../store/index.js';
import { PREV_EMOJI, NEXT_EMOJI, UPDATE_EMOJI } from '../../store/actionTypes.js';


export const Animate = () => {
  const dispatch = useDispatch();
  const { position, sliderActive } = useSelector(state => state);

  const [counter, setCounter] = useState(null);
  const [timerId, setTimerId] = useState(null);
  const [playing, setPlaying] = useState(true);
    
  // console.log('_______ playing', playing)
  // console.log('_______ timerId', timerId)
  // console.log('_______ counter', counter)

  useEffect(() => {
    if (sliderActive) {
      clearInterval(timerId);
      setPlaying(false);
      setTimerId(null);
    }
    setCounter(position);
  }, [position]);

  const handleClick = () => {
    if (playing) {
      let count = position;
      const id = setInterval(() => {
        setCounter(count);
        dispatch({
          type: UPDATE_EMOJI,
          payload: count
        });
        count++;
      }, 500)
      setTimerId(id);
    } else {
      clearInterval(timerId);
      setTimerId(null);
    }
    setPlaying(prevState => !prevState);
  }

  return (
    <>
      <button onClick={handleClick}>
        {playing ? 'Play' : 'Pause'}
      </button>
    </>
  )
}