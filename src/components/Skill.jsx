import { skills as data } from "./../skills";
import { useState, useEffect } from "react";
// import imagen from '../assets/Ajax.png'
// import {useParams, Redirect} from 'react-router-dom';
const imageSkill = require.context("../assets", true);
// console.log(skills);
function SkillList({ name }) {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills(data);
    }, []);

    if (skills.length === 0) {
        return <h1>No hay habilidades ahun</h1>;
    }
    // const {imagen} = useParams();

    return (
        <div>
            {skills.map((skill) => (
                <div className="card" key={skill.id}>
                    <div className="card-body text-center bg-secondary">
                        <div className="col-2 bg-white rounded-circle d-flex justify-content-center">
                            <img
                                src={imageSkill(`./${skill.image}.png`)}
                                className="img-fluid"
                                width="20%"
                            />
                        </div>
                            <h3>{skill.name}</h3>
                            {/* <h3>{imagen}</h3> */}
                            {/* <div>Skill</div> */}
                    </div>
                </div>
            ))}
        </div>
    );

    // useEffect(() => {
    //   setSkills(skills);
    // }, []);

    // return <div>{(skills.map = (skill) => <div>Skill</div>)}</div>;
}

export default SkillList;
