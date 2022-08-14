import React from 'react';
import { Deck, Slide, Heading, Quote } from 'spectacle';
import { Main } from './Components';
import { transition1, transition2 } from './constants';

// const theme = {
//   colors: {
//     primary: 'linear-gradient(to top, #ffffff, #070a0c)',
//     secondary: '#00f'
//   },
//   fontSizes: {
//     header: '64px',
//     paragraph: '28px'
//   }
// };

const App = () => {
  return (
    <>
      <Deck>
        {/* theme={theme} */}
        <Slide backgroundColor="#fff" transition={transition1}>
          <Main />
        </Slide>
        <Slide backgroundColor="#F6F6F6" transition={transition2}>
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
