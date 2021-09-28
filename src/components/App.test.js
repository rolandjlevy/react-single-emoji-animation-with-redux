import React from 'react';

import '@testing-library/jest-dom';
import {
  render,
  screen,
  waitFor,
  logRoles
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import App from './App.jsx';

describe('Emoji slider', () => {
  test('Should check full range of emojis', () => {
    
    render(<App />);

    screen.queryByRole('heading', { name: 'Explore Emojis!' });

    // const subtractButton = screen.queryByRole('button', { name: 'Subtract' });
    // const addButton = screen.queryByRole('button', { name: 'Add' });
    
    // userEvent.click(subtractButton);
    // screen.queryByRole('heading', { name: 'Counter: -1' });
    
    // userEvent.click(addButton);
    // screen.queryByRole('heading', { name: 'Counter: 0' });
    
  });
});