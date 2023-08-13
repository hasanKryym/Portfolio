import Navbar from '../Navbar/Navbar';
import './Home.css';
import ProfileImg from '../../assets/images/logo.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <div className="home_container">
        <Navbar />
        <motion.div
          initial={{ y: '2rem', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: 'spring',
          }}
          className="content_container home_content"
        >
          <img src={ProfileImg} alt="" />
          <div className="personal_info">
            <h3>Hello I am Hasan Krayem </h3>
            <span>Full Stack Web Developer</span>
            <p>
              I'm a web developer skilled in both front-end and back-end (PERN
              or MERN) technologies, with over a year of experience. I've worked
              on several projects that have given me practical insights into the
              field. Right now, I'm looking for a full-time job where I can use
              my skills effectively, collaborate with a team, and continue
              learning and growing in my career.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
