import React from 'react';
import { Mood } from './constants';
import './Container.css';

export const Container = ({ mood, toggleMood, children }) => {
  const isGood = mood === Mood.Good;

  return (
    <div 
      className={`container ${isGood ? 'container-good' : 'container-bad'}`}
    >
      <p className='heading'>
        {isGood
          ? 'Remember that'
          : 'Write out the bad things below'}
      </p>

      <main className={`body ${isGood ? 'body-good' : 'body-bad'}`}>
        {children}
      </main>

      <button
        className={`button ${isGood ? 'button-good' : 'button-bad'}`}
        onClick={toggleMood}
      >
        {isGood
          ? 'Sure'
          : 'Break all bad'}
      </button>
    </div>
  );
};
