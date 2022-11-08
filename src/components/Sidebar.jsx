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
                        <Skill name={skill.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
