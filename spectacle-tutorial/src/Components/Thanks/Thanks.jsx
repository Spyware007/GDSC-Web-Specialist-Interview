import React from 'react';
import classes from './Thanks.module.css';
import { Quote } from 'spectacle';

const Thanks = () => {
  return (
    <>
      <div className={classes.thanks}>
        <Quote fontFamily="BeVietnamBold" color="#ffffff" fontSize="100px">
          Let me be the CSS to GDSC's HTML
        </Quote>
      </div>
      <h1 className={classes.author}>Om Gawande</h1>
    </>
  );
};

export default Thanks;
