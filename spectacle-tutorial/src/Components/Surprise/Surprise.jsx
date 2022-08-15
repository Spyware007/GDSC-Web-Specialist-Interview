import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './Surprise.module.css';
import think from '../../Assets/Memoji/think.png';

const Surprise = () => {
  return (
    <>
      <Navbar active="surprise" />
      <div className={classes.surprise_section}>
        <div className={classes.surprise}>
          <h1 className={classes.question}>
            Can you guess the software I used to make this PPT?
          </h1>
          <div className={classes.divide}>
            <div>
              <h2 className={classes.option}>Canva</h2>
              <h2 className={classes.option}>Figma</h2>
            </div>
            <div>
              <h2 className={classes.option}>Microsoft Powerpoint</h2>
              <h2 className={classes.option}>Google Slides</h2>
            </div>
          </div>
        </div>
      </div>
      <img className={classes.think} src={think} alt="think" />
    </>
  );
};

export default Surprise;
