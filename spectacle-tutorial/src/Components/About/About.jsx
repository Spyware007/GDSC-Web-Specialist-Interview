import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './About.module.css';
import hero from '../../Assets/Memoji/4.png';

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
            <li className={classes.about_list_items}>Full-stack Developer</li>
            <li className={classes.about_list_items}>Open Sourcerer</li>
            <li className={classes.about_list_items}>Content Creator</li>
            <li className={classes.about_list_items}>
              GDSC Technical Coordinator
            </li>
            <li className={classes.about_list_items}>Postman Student Expert</li>
            <li className={classes.about_list_items}>Building Xp House</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
