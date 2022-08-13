import React from 'react';
import { Deck, Slide, Heading, Quote } from 'spectacle';
import { Main } from './Components';
import { transition1, transition2 } from './constants';

const App = () => {
  return (
    <>
      <Deck>
        <Slide backgroundColor="#fff" transition={transition1}>
          {/* <Heading>Welcome to Spectacle</Heading> */}
          <Main />
        </Slide>
        <Slide transition={transition2}>
          <Heading>Welcome to </Heading>
        </Slide>
        <Slide>
          <Heading>Welcome </Heading>
        </Slide>
        <Slide>
          <Heading>Welcome to Jungle </Heading>
        </Slide>
        <Slide>
          <Quote>
            <Quote>Welcome to Jungle</Quote>
          </Quote>
        </Slide>
        <Slide></Slide>
      </Deck>
    </>
  );
};

export default App;
