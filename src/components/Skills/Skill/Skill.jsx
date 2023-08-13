import './Skill.css';
// import React_logo from '../../../assets/images/React_logo.jpg';

const Skill = ({ image, title }) => {
  const Logo = require(`../../../assets/images/skills/${image}`);
  return (
    <>
      <div className="card">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="card-inner">
          <img src={Logo} alt="" />
          <div className="card_title">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
