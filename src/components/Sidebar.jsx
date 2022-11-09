import React, { useState, useEffect } from "react";
import Skill from "./Skill";
import { skills as data } from "../skills";

function Sidebar({ clases }) {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills(data);
    }, []);

    return (
        <div className={clases}>
            <div className="col">
                {skills.map((skill) => (
                    <div key={skill.id}>
                        <Skill name={skill.name} classSkill="border-0" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
