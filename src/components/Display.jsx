import React from 'react';
import { useSelector } from 'react-redux';

export const Display = () => {
  const position = useSelector(state => state.position)
  return (
    <div>
      {position + 1} of {emoji.length}
    </div>
  )
}