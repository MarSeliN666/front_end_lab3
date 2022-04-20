import React from 'react';
import { Container } from './Container';
import { Mood } from './constants';
import './GoodMood.css';



export const GoodMood = ({ quote, toggleMood }) => (
  <Container mood={Mood.Good} toggleMood={toggleMood}>
    <p className='quote'>
      {quote}
    </p>
  </Container>
);
