import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import CardMaster from "./components/Card_master";
import CardExp from "./components/Card_experience";
import CardStudy from "./components/Card_study";
import CardProyects from "./components/Card_proyects";
import CardOthers from "./components/Card_Others";
import Card from "./components/Card";
import ButtonCoffe from "./components/Button_coffe";
import { proyects as dataProyect, infoPrincipal as dataInfo } from "./skills";

export function App() {
    const [proyects, setProyects] = useState([]);
    const [infoPrincipal, setInfoPrincipal] = useState([]);

    useEffect(() => {
        setProyects(dataProyect);
        setInfoPrincipal(dataInfo);
    }, []);

    return (
        <>
            <div className="container-xxl py-3" style={{ height: "100%" }}>
                <div className="container-fluid">
                    <div className="row" style={{ paddingTop: "10%" }}>
                        <div className="col-xl-10 col-lg-10 col-md-8 col-sm-8 col-8 mt-5 position-relative">
                            {infoPrincipal.map((info) => (
                                <div key={info.id}>
                                    <CardMaster
                                        imagen={info.image}
                                        p={info.parrafo}
                                        title={info.title}
                                    />
                                </div>
                            ))}
                            <hr />
                            <CardExp title="Experiencia laboral" />
                            <hr />
                            <CardStudy title="Educación" />
                            <hr />
                            {proyects.map((proyect) => (
                                <div key={proyect.id}>
                                    <CardProyects
                                        titulo={proyect.titulo}
                                        proyectName={proyect.name}
                                        image1={proyect.imag1}
                                        image2={proyect.imag2}
                                        image3={proyect.imag3}
                                        title={proyect.title}
                                        text={proyect.text}
                                        lenguaje={proyect.herramientas}
                                    />
                                    <hr />
                                </div>
                            ))}
                            <CardOthers />
                            <ButtonCoffe className="position-absolute" />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mt-5 px-0 rounded-3 bg-white">
                            <Sidebar className="position-relative" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
