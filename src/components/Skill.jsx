import { skills } from "./../skills";
import { useState, useEffect } from "react";

const imageSkill = require.context('../assets/', true);

function Skill({imagen, name}) {
  // const [skills, setSkills] = useState([]);
  
  return(
    <>
      <div className="card">
          <div className="card-body">
              <img src={imageSkill(`${imagen}`)} alt=""/>
              <h3>{name}</h3>
          </div>
      </div>
    </>
  );

  // useEffect(() => {
  //   setSkills(skills);
  // }, []);

  // return <div>{(skills.map = (skill) => <div>Skill</div>)}</div>;
}

export default Skill;
