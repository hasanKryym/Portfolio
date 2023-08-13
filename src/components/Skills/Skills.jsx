import './Skills.css';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import Skill from './Skill/Skill';

import { skillsData } from '../../assets/data';

const Skills = () => {
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
        className="content_container skills_content"
      >
        {skillsData.map((skill, index) => {
          return <Skill key={index} {...skill} />;
        })}
      </motion.div>
    </>
  );
};

export default Skills;
