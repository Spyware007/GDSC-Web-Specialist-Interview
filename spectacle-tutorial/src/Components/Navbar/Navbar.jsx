import React from 'react';
import classes from './Navbar.module.css';

const Navbar = ({ active }) => {
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          {active != 'surprise' ? (
            <>
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
                  active === 'vision'
                    ? `${classes.item} ${classes.active}`
                    : classes.item
                }
              >
                Vision
              </li>
            </>
          ) : (
            <>
              <li
                className={
                  active === 'surprise'
                    ? `${classes.item} ${classes.active}`
                    : classes.item
                }
              >
                Fun Fact
              </li>
              <li
                className={
                  active === 'surprise'
                    ? `${classes.item} ${classes.active}`
                    : classes.item
                }
              >
                Fun Fact
              </li>
              <li
                className={
                  active === 'surprise'
                    ? `${classes.item} ${classes.active}`
                    : classes.item
                }
              >
                Fun Fact
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
