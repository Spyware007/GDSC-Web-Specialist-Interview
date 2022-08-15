import React, { useEffect } from 'react';
import { Deck, Slide } from 'spectacle';
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
import { transition1, transition2, transition4 } from './constants';

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
const slideColor = '#222831';

const App = () => {
  useEffect(() => {
    console.log(ProjectsData);
  }, []);

  return (
    <>
      <Deck>
        {/* theme={theme} */}
        <Slide backgroundColor={slideColor} transition={transition1}>
          <Main />
        </Slide>
        <Slide backgroundColor={slideColor} transition={transition4}>
          <About />
        </Slide>
        {ProjectsData.map((p, i) => {
          return (
            <Slide key={i} backgroundColor={slideColor}>
              <Projects project={p} />
            </Slide>
          );
        })}
        <Slide backgroundColor={slideColor}>
          <Clubs />
        </Slide>
        <Slide backgroundColor={slideColor} transition={transition4}>
          <Vision />
        </Slide>
        <Slide backgroundColor={slideColor} transition={transition2}>
          <Surprise />
        </Slide>
        <Slide backgroundColor={slideColor}>
          <h1 className="check">Let&apos;s check the answer, shall we?</h1>
          <div className="section_link">
            <img className="blown" src={blown} alt="blown" />
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://gdsc-web-specialist-interview.vercel.app/"
            >
              Surprise
            </a>
          </div>
        </Slide>
        <Slide backgroundColor="#14212d">
          <Thanks />
        </Slide>
      </Deck>
    </>
  );
};

export default App;
