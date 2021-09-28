import React from 'react';
import '../App.css';

export const Header = ({ title }) => {
  return (
    <>
      <h3 className="header">{title}</h3>
    </>
  )
}