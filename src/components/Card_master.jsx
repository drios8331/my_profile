import React, { useState, useEffect } from "react";
import "../style.css";
import * as Icon from "react-bootstrap-icons";
import Image from "./Image";
import Title from "./Title";
import Parrafo from "./Parrafo";
import Icons from "./Icon";
import Card from "./Card";
import { infoContact as data } from "../skills";

function CardMaster({ title, p }) {
    const [infoContact, setInfoContact] = useState([]);

    useEffect(() => {
        setInfoContact(data);
    }, []);

    return (
        <Card classCard="p-5">
            <div className="row">
                <div className="col-4">
                    <Image
                        classImage="rounded-circle shadow-lg w-75"
                        nameImage="Foto_David"
                        styleImage={{ marginTop: "-55%" }}
                    />
                </div>
                <Title
                    classContent="col-sm-12 col-md-8 col-lg-8 text-end text-decoration-underline"
                    title={title}
                />
            </div>
            <div className="row text-center">
                <div className="col mt-3">
                    {infoContact.map((info) => (
                        <div key={info.id}>
                            <Icons
                                classContent="row profyle fw-bold"
                                classIcon={info.icon}
                                classText="text-dark fs-4"
                                content={info.content}
                            />
                        </div>
                    ))}
                    <Parrafo
                        classContent="row"
                        classParrafo="mt-4 profyle fs-5"
                        parrafo={p}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col text-end mt-5">
                    <a
                        href="https://github.com/drios8331"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon.Github color="royalblue" size={30} />
                    </a>
                </div>
                <div className="col text-start mt-5">
                    <a
                        href="https://www.linkedin.com/in/david-rios-0a2971245/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon.Linkedin color="royalblue" size={30} />
                    </a>
                </div>
            </div>
        </Card>
    );
}

export default CardMaster;
