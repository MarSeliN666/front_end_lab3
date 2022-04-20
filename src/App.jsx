import React, { useCallback, useState, useMemo } from 'react';
import { BadMood } from './BadMood';
import { GoodMood } from './GoodMood';
import { Mood, quotes } from './constants';
import './App.css';

const App = () => {
  const [mood, setMood] = useState(Mood.Bad);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quote = useMemo(() => {
    return quotes[quoteIndex];
  }, [quoteIndex]);

  const isBad = mood === Mood.Bad;

  const updateQuoteIndex = useCallback(() => {
    if (quoteIndex === quotes.length - 1) {
      setQuoteIndex(0);
    } else {
      setQuoteIndex(quoteIndex + 1);
    }
  }, [quoteIndex]);

  const toggleMood = useCallback(() => {
    if (isBad) {
      setMood(Mood.Good);
    } else {
      setMood(Mood.Bad);

      updateQuoteIndex();
    }
  }, [isBad, updateQuoteIndex])

  return (
    <>
      {isBad
        ? <BadMood toggleMood={toggleMood} />
        : <GoodMood quote={quote} toggleMood={toggleMood} />}
    </>
  );
};

export default App;
