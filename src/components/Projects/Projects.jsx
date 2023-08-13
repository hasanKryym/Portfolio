import './Projects.css';
import Project from './Project/Project';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { projectsData } from '../../assets/data';

const Projects = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: '2rem', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: 'spring',
        }}
        className="projects_container content_container"
      >
        {projectsData.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </motion.div>
    </>
  );
};

export default Projects;
