import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './Clubs.module.css';
import { ProjectsData2 } from '../../Assets/Data/ProjectsData2';

const Clubs = () => {
  return (
    <>
      <Navbar active="projects" />
      <h1 className={classes.text}>#Club Websites</h1>
      <div className={classes.project_section}>
        {ProjectsData2.map((p, i) => {
          return (
            <div key={i} className={classes.project_img_container}>
              <img className={classes.project_img} src={p.img} alt="" />
              <h6 className={classes.commits}>{p.name}</h6>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Clubs;
