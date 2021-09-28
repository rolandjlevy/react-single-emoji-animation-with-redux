import React from 'react';
import { Header } from './Header';
import { Slider } from './Slider';
import { Button } from './Button';
import { Display } from './Display';
import { Animate } from './Animate';

const App = () => {
  return (
    <>
     <Header title="Explore Emojis!" />
     <Slider />
     <Button dir={-1} label="previous" />
     <Button dir={1} label="next" />
     <Display />
     <Animate />
    </>
  );
}

export default App;