import React from 'react';
import { createRoot } from 'react-dom';

const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Bingo',
      animal: 'Dog',
      breed: 'Rotweiler',
    }),
    React.createElement(Pet, {
      name: 'Tweety',
      animal: 'Bird',
      breed: 'Peacock',
    }),
    React.createElement(Pet, {
      name: 'Boink',
      animal: 'Cat',
      breed: 'Mixed',
    }),
  ]);
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
