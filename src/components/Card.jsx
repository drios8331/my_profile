// import '../style.css';
import "antd/dist/antd.css";
import Title from "./Title";
import Image from "./Image";
import { Timeline } from "antd";
// const image = require.context("../assets/imagOthers", true);

function Card({ imagen, title, p }) {
    return (
        <div className="card hover-shadow">
            <div className="card-body p-5">
                <div className="row text-center">
                    <div className="col">
                        <Title classContent="text-center pb-4" title={title} />
                        <Timeline mode="alternate">
                            <Timeline.Item>
                                <div className="row d-flex align-items-center">
                                    <div className="row">
                                        <div className="col-1 px-0 text-center">
                                            <Image
                                                nameImage="veLogo"
                                                classImage=""
                                                styleImage={{ width: "20px" }}
                                            />
                                        </div>
                                        <div className="col px-0">
                                            imgGalaxia Seguridad Ltda.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col px-0">
                                            Web Developer
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col px-0">
                                            Agosto 2014 - Present.
                                        </div>
                                    </div>
                                </div>
                            </Timeline.Item>
                            <Timeline.Item color="Red">
                                Junio 2008 - Enero 2009
                                <br />
                                Flag Soluciones.
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
