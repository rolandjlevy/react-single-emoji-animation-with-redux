import React, { useState } from 'react';
import { Emoji } from './Emoji';

export const Slider = () => {
  const [pos, setPos] = useState(1);
  const onInput = (e) => {
    setPos(e.target.value);
  }
  return (
    <>
      <input type="range" onInput={onInput} min="1" max={emoji.length-1} value={pos} />
      <Emoji pos={pos} />
    </>
  )
}