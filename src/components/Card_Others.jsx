import React, { useState, useEffect } from "react";
import Card from "./Card";
import Skill from "./Skill";
import { others as data } from "../skills";

function Card_Others() {
    const [others, setOthers] = useState([]);

    useEffect(() => {
        setOthers(data);
    }, []);

    return (
        <>
            <Card classCard="p-5">
                <div className="fs-4 text-center fw-bold mb-3">
                    <h3 className="title_shadow">OTROS CONOCIMIENTOS</h3>
                </div>
                <div className="row justify-content-center px-0 mx-0">
                    {others.map((info) => (
                        <div className="col-6 mb-3" key={info.id}>
                            <Card classCard="p-3">
                                <div className="row text-center m-3 fs-4 rounded-3 px-0 mx-0" style={{background: "rgba(155,155,155,0.7)"}}>
                                    <div className="col-12 text-white">{info.title}</div>
                                </div>
                                <div className="row">
                                    <div className="col-6 rounded-5">
                                        {/* <Image nameImage="dtr720" classImage="w-75" /> */}
                                        <Skill name={info.image} />
                                    </div>
                                    <div className="col-6 profyle fs-6">
                                        {info.text}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </Card>
        </>
    );
}

export default Card_Others;
