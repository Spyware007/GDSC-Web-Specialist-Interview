import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './About.module.css';
import hero from '../../Assets/Memoji/4.png';
import { Stepper } from 'spectacle';

const About = () => {
  return (
    <>
      <Navbar active="about" />
      <div className={classes.about}>
        <div className={classes.about_image}>
          <img src={hero} alt="hero" />
        </div>
        <div className={classes.about_content}>
          <h5 className={classes.about_nick}>Spider</h5>
          <h1 className={classes.about_text}>About Me</h1>
          <div className={classes.separator}></div>

          <ul className={classes.about_list}>
            <Stepper
              tagName="li"
              alwaysVisible
              values={['3rd Year Computer 🧑‍💻']}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
            <Stepper
              tagName="li"
              alwaysVisible
              values={['Full-stack Developer 🕸']}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
            <Stepper tagName="li" alwaysVisible values={['Open Sourcerer 🪄']}>
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
            <Stepper
              tagName="li"
              alwaysVisible
              values={['Content Creator (LinkedIn 3.6k+) 📈']}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
            <Stepper
              tagName="li"
              alwaysVisible
              values={['GDSC Technical Coordinator 😎']}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
            <Stepper
              tagName="li"
              alwaysVisible
              values={['Postman Student Expert 🚀']}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
            <Stepper
              tagName="li"
              alwaysVisible
              values={['Building Xp House 🎯']}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
            <Stepper
              tagName="li"
              alwaysVisible
              values={['Participated in many hackathons 💫']}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
          </ul>
        </div>
      </div>
      <h1 className={classes.github}>@Spyware007</h1>
    </>
  );
};

export default About;
