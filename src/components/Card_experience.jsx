// import '../style.css';
import "antd/dist/antd.min.css";
import Title from "./Title";
import { Timeline } from "antd";
import Experience from "./Experience";
import Card from "./Card";
// const image = require.context("../assets/imagOthers", true);

function CardExp({ imagen, title, p }) {
    return (
        <Card style="d-flex justify-content-center">
            <div className="row text-center">
                <div className="col-5 p-5">
                    <Title
                        classContent="text-center pb-4 mt-5 me-5"
                        title={title}
                    />
                </div>
                <div className="col">
                    <Timeline>
                        <Timeline.Item>
                            <div className="row d-flex align-items-center">
                                <Experience
                                    imagen="veLogo"
                                    nameEmpresa="Galaxia Seguridad Ltda."
                                    nameCargo="Web Developer"
                                    date="Agosto 2014 - Actualmente"
                                />
                            </div>
                        </Timeline.Item>
                        <Timeline.Item color="Green">
                            <div className="row d-flex align-items-center">
                                <Experience
                                    imagen="Alpha"
                                    nameEmpresa="Alpha Seguridad Ltda."
                                    nameCargo="Guarda de Seguridad"
                                    date="Agosto 2011 - Mayo 2014"
                                />
                            </div>
                        </Timeline.Item>
                        <Timeline.Item color="Red">
                            <div className="row d-flex align-items-center">
                                <Experience
                                    imagen="flag_soluciones"
                                    nameEmpresa="Flag Soluciones"
                                    nameCargo="Auxiliar Administrativo"
                                    date="Junio 2008 - Enero 2009"
                                />
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
        </Card>
    );
}

export default CardExp;
