import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './Vision.module.css';
import { Stepper } from 'spectacle';

const Vision = () => {
  return (
    <>
      <Navbar active="vision" />
      <div className={classes.vision}>
        {/* <h1 className={classes.text}>Vision</h1> */}
        <div className={classes.separator1}></div>
        <ul className={classes.list}>
          <div className={classes.items}>
            <Stepper tagName="li" alwaysVisible values={['const visions = { ']}>
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
          </div>
          <div className={classes.items}>
            <Stepper
              tagName="li"
              alwaysVisible
              values={[
                'Succeed my mentors and take forward their legacy as Web Dev Specialist,'
              ]}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
          </div>
          <div className={classes.items}>
            <Stepper
              tagName="li"
              alwaysVisible
              values={[
                'Promote Web Development in the Community to another level,'
              ]}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
          </div>
          <div className={classes.items}>
            <Stepper
              tagName="li"
              alwaysVisible
              values={['Workshop on APIs 101 with Postman,']}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
          </div>
          <div className={classes.items}>
            <Stepper
              tagName="li"
              alwaysVisible
              values={['Organize a National Level Hackathon']}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
          </div>
          <div className={classes.items}>
            <Stepper tagName="li" alwaysVisible values={['}']}>
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
          </div>
        </ul>
        <div className={classes.separator2}></div>
      </div>
    </>
  );
};

export default Vision;
