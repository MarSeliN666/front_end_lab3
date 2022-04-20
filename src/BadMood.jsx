import React from 'react';
import { Container } from './Container';
import { Mood } from './constants';
import './BadMood.css';

export const BadMood = ({ toggleMood }) => (
  <Container
    mood={Mood.BadMood}
    toggleMood={toggleMood}
  >
    <textarea
      className='textarea'
      placeholder='I was upset from...'
      rows={3}
    />
  </Container>
);
