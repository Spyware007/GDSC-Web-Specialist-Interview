import React from 'react';
import classes from './Main.module.css';
import { CircleGrid } from 'react-awesome-shapes/dist/shapes/circlegrid';

const Shapes = () => {
  return (
    <>
      <CircleGrid
        className={classes.circlegrid}
        color="#ff5100"
        size={['120px', '150px', '180px', '200px']}
        zIndex={0}
      />
    </>
  );
};

const Main = () => {
  return (
    <>
      {Shapes()}
      <div>Hello</div>
    </>
  );
};

export default Main;
