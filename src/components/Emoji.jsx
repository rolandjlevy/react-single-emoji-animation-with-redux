import React from 'react';
import '../App.css';

export const Emoji = ({ pos }) => {
  return (
    <>
      <div className="emoji">{emoji[pos]}</div>
    </>
  )
}