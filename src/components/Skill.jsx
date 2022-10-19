import { skills } from "./../skills";
import card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

console.log(skills);
function Skill() {
  // const [skills, setSkills] = useState([]);

  return(
    <>
      <div className="card">
          <div className="card-body">
              <img src="./assets/Ajax.png" alt=""/>
              <h3>nombre</h3>
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
