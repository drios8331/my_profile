import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import Title from "./Title";
import { Timeline } from "antd";
import Experience from "./Experience";
import Card from "./Card";
import { education as data } from "../skills";

function CardStudy({ title }) {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        setEducation(data);
    }, []);

    return (
        <Card classCard="p-5">
            <div className="row">
                <div className="col-5 p-5 mt-5">
                    <Title
                        classContent="text-center pb-4 mt-5 me-5"
                        ClassTitle="pt-3 title_shadow"
                        title={title}
                    />
                </div>
                <div className="col">
                    <Timeline>
                        {education.map((info) => (
                            <Timeline.Item color={info.color} key={info.id}>
                                <div className="row d-flex align-items-center">
                                    <Experience
                                        imagen={info.imagen}
                                        nameEmpresa={info.nameEmpresa}
                                        estudio={info.estudio}
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

export default CardStudy;
