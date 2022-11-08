import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import Title from "./Title";
import { Timeline } from "antd";
import Experience from "./Experience";
import Card from "./Card";
import { experience as dataExperience } from "../skills";

function CardExp({ title }) {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        setExperience(dataExperience);
    }, []);

    return (
        <Card style="d-flex justify-content-center" classCard="p-5">
            <div className="row text-center">
                <div className="col-5 p-5">
                    <Title
                        classContent="text-center pb-4 mt-5 me-5 title_shadow"
                        title={title}
                    />
                </div>
                <div className="col">
                    <Timeline>
                        {experience.map((info) => (
                            <Timeline.Item color={info.color} key={info.id}>
                                <div className="row d-flex align-items-center">
                                    <Experience
                                        imagen={info.imagen}
                                        nameEmpresa={info.nameEmpresa}
                                        nameCargo={info.nameCargo}
                                        date={info.date}
                                    />
                                </div>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </div>
            </div>
        </Card>
    );
}

export default CardExp;
