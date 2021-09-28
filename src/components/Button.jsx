import React from 'react';
import { useDispatch } from 'react-redux';
import { PREV_EMOJI, NEXT_EMOJI } from '../../store/actionTypes.js';

export const Button = ({ label, dir }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    const type = dir < 0 ? PREV_EMOJI : NEXT_EMOJI;
    dispatch({
      type
    });
  }
  return (
    <>
      <button 
        onClick={handleClick} 
      >
        {label}
      </button>
    </>
  )
}