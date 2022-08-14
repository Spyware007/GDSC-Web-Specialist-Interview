import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './Projects.module.css';
import draic from '../../Assets/Projects/draic.png';

const Projects = () => {
  return (
    <>
      <Navbar active="projects" />
      <div className={classes.project_section}>
        <div className={classes.project_img_container}>
          <img className={classes.project_img} src={draic} alt="" />
        </div>
        <div className={classes.project_content}>
          <h5 className={classes.project_tech}>Rimberio Co Shoe Store</h5>
          <h1 className={classes.project_name}>Best Product</h1>
          <div className={classes.separator}></div>
          <p className={classes.project_description}>
            Apply page animations and transitions to your Canva presentation to
            emphasize ideas and make them even more memorable.
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
