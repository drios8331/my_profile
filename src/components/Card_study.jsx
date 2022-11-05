// import '../style.css';
import "antd/dist/antd.min.css";
import Title from "./Title";
import { Timeline } from "antd";
import Experience from "./Experience";
// const image = require.context("../assets/imagOthers", true);

function Card({ imagen, title, p }) {
    return (
        <div className="card hover-shadow">
            <div className="card-body p-5  d-flex justify-content-center">
                <div className="row">
                    <div className="col-5 p-5 mt-5">
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
                                        imagen="Sena"
                                        nameEmpresa="Sena"
                                        estudio="Tecnólogo"
                                        nameCargo="Análisis y Desarrollo de Sistemas de Información."
                                        date="2022"
                                    />
                                </div>
                            </Timeline.Item>
                            <Timeline.Item color="Green">
                                <div className="row d-flex align-items-center">
                                    <Experience
                                        imagen="politecnico_mayor"
                                        nameEmpresa="Politécnico Mayor"
                                        estudio="Técnico"
                                        nameCargo="Asistente en Sistemas"
                                        date="2019"
                                    />
                                </div>
                            </Timeline.Item>
                            <Timeline.Item color="Red">
                                <div className="row d-flex align-items-center">
                                    <Experience
                                        imagen="compuestudio"
                                        nameEmpresa="Compuestudio Ltda."
                                        estudio="Técnico"
                                        nameCargo="Administración de Empresas"
                                        date="2008"
                                    />
                                </div>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
