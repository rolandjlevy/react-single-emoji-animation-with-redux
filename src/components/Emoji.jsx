import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

export const Emoji = () => {
  const position = useSelector(state => state.position);
  return (
    <>
      <div className="emoji">{emoji[position]}</div>
    </>
  )
}