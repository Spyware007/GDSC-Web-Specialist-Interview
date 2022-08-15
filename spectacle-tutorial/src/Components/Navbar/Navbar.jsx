import React from 'react';
import classes from './Navbar.module.css';

const Navbar = ({ active }) => {
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          {active !== 'surprise' ? (
            <>
              <li
                className={
                  active === 'about'
                    ? `${classes.item} ${classes.active}`
                    : classes.item
                }
              >
                &lt;HTML/&gt;
              </li>
              <li
                className={
                  active === 'projects'
                    ? `${classes.item} ${classes.active}`
                    : classes.item
                }
              >
                #CSS
              </li>
              <li
                className={
                  active === 'vision'
                    ? `${classes.item} ${classes.active}`
                    : classes.item
                }
              >
                {`{ JS }`}
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
                Quiz Time
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
