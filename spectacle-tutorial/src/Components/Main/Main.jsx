import React from 'react';
import classes from './Main.module.css';
// import { CircleGrid } from 'react-awesome-shapes/dist/shapes/circlegrid';
import logo from '../../Assets/Memoji/3.png';
import grid from '../../Assets/grid.png';
import { SkillsData } from '../../Assets/Data/SkillsData';

// const Shapes = () => {
//   return (
//     <>
//       <CircleGrid
//         className={classes.circlegrid}
//         color="#7184BB"
//         size={['120px', '150px', '180px', '200px']}
//         zIndex={0}
//       />
//     </>
//   );
// };

const Main = () => {
  return (
    <>
      {/* {Shapes()} */}
      <div className={classes.main}>
        <img className={classes.image} src={logo} alt="logo" />
        <div>
          <h1 className={classes.name}>
            Om <br /> Gawande{' '}
          </h1>
          <div className={classes.skills_container}>
            {SkillsData.map((skill, i) => {
              return (
                <img
                  className={classes.skill_img}
                  src={skill.img}
                  alt={`${skill.img}`}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
      <img className={classes.grid} src={grid} alt="grid" />
    </>
  );
};

export default Main;
