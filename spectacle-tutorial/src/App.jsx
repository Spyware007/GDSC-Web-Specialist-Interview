import React from 'react';
import { Deck, Slide, Heading, Quote } from 'spectacle';
import { Main, About, Whyme, Projects } from './Components';
import {
  transition1,
  transition2,
  transition3,
  transition4
} from './constants';

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
        <Slide backgroundColor="#F6F6F6" transition={transition4}>
          <About />
        </Slide>

        <Slide backgroundColor="#F6F6F6" transition={transition2}>
          <Projects />
        </Slide>
        <Slide backgroundColor="#F6F6F6" transition={transition4}>
          <Whyme />
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
