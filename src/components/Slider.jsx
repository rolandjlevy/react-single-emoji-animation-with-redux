import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  PREV_EMOJI, 
  NEXT_EMOJI, 
  UPDATE_EMOJI, 
  SET_SLIDER_STATUS 
} from '../../store/actionTypes.js';
import { Emoji } from './Emoji';

export const Slider = () => {
  const [pos, setPos] = useState(0);
  const dispatch = useDispatch();
  const { position, sliderActive } = useSelector(state => state);

  useEffect(() => {
    if (!sliderActive) {
      setPos(position);
    }
  }, [position]);

  const onInput = (e) => {
    const num = Number(e.target.value);
    setPos(num);
    dispatch({
      type: UPDATE_EMOJI,
      payload: num
    });
  }

  const setSliderStatus = (status) => {
    dispatch({
      type: SET_SLIDER_STATUS,
      sliderActive: status
    });
  }

  return (
    <>
      <input 
        type="range" 
        onInput={onInput} 
        onMouseDown={() => setSliderStatus(true)}
        onMouseUp={() => setSliderStatus(false)}
        step="1"
        min="0" 
        max={emoji.length-1} 
        value={pos} 
        className="slider"
      />
      <Emoji />
    </>
  )
}