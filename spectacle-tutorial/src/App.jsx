import React, { useEffect } from 'react';
import { Deck, Slide, Heading, Quote } from 'spectacle';
import { Main, About, Vision, Projects, Clubs, Surprise } from './Components';
import { ProjectsData } from './Assets/Data/ProjectsData';
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
  useEffect(() => {
    console.log(ProjectsData);
  }, []);

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
        {ProjectsData.map((p, i) => {
          return (
            <Slide key={i} backgroundColor="#F6F6F6">
              <Projects project={p} />
            </Slide>
          );
        })}
        <Slide backgroundColor="#F6F6F6">
          <Clubs />
        </Slide>
        <Slide backgroundColor="#F6F6F6" transition={transition4}>
          <Surprise />
        </Slide>
        <Slide backgroundColor="#F6F6F6" transition={transition4}>
          <Vision />
        </Slide>
      </Deck>
    </>
  );
};

export default App;
