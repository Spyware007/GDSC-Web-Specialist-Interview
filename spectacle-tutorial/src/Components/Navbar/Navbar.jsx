import React from 'react';
import classes from './Navbar.module.css';

const Navbar = ({ active }) => {
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li
            className={
              active === 'about'
                ? `${classes.item} ${classes.active}`
                : classes.item
            }
          >
            About
          </li>
          <li
            className={
              active === 'projects'
                ? `${classes.item} ${classes.active}`
                : classes.item
            }
          >
            Projects
          </li>
          <li
            className={
              active === 'whyme'
                ? `${classes.item} ${classes.active}`
                : classes.item
            }
          >
            Why Me
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
