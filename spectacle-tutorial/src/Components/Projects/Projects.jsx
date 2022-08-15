import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './Projects.module.css';
// import draic from '../../Assets/Projects/draic.png';

const Projects = ({ project }) => {
  return (
    <>
      <Navbar active="projects" />
      <div className={classes.project_section}>
        <div className={classes.project_img_container}>
          <img className={classes.project_img} src={project.img} alt="" />
          <h6 className={classes.commits}>
            {project.commits
              ? `${project.commits}k+ Lines of Code`
              : project.commitss
              ? 'A Chrome Extension'
              : `${project.stars}+ stars`}
          </h6>
        </div>
        <div className={classes.project_content}>
          <h5 className={classes.project_tech}>{project.tech}</h5>
          <h1 className={classes.project_name}>#{project.name}</h1>
          <div className={classes.separator}></div>
          <p className={classes.project_description}>{project.desc}</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
