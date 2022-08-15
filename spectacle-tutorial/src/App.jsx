import React, { useEffect } from 'react';
import { Deck, Slide, Heading, Quote } from 'spectacle';
import {
  Main,
  About,
  Vision,
  Projects,
  Clubs,
  Surprise,
  Thanks
} from './Components';
import { ProjectsData } from './Assets/Data/ProjectsData';
import blown from './Assets/Memoji/10.png';
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
        <Slide backgroundColor="#F6F6F6" transition={transition2}>
          <Surprise />
        </Slide>
        <Slide backgroundColor="#F6F6F6">
          <div className="section_link">
            <img className="blown" src={blown} alt="blown" />
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://gdsc-web-specialist-interview.vercel.app/"
            >
              Link
            </a>
          </div>
        </Slide>
        <Slide backgroundColor="#F6F6F6" transition={transition4}>
          <Vision />
        </Slide>
        <Slide backgroundColor="#000000">
          <Thanks />
        </Slide>
      </Deck>
    </>
  );
};

export default App;
