import "../style.css";
import * as Icon from "react-bootstrap-icons";
import Image from "./Image";
import Title from "./Title";
import Parrafo from "./Parrafo";
import Icons from "./Icon";

function CardMaster({ title, p }) {
    return (
        <div className="card hover-shadow">
            <div className="card-body p-5">
                <div className="row">
                    <div className="col-4">
                        <Image
                            classImage="rounded-circle shadow-lg w-75"
                            nameImage="Foto_David"
                            styleImage={{ marginTop: "-55%" }}
                        />
                    </div>
                    <Title
                        classContent="col-sm-12 col-md-8 col-lg-8 text-end"
                        title={title}
                    />
                </div>
                <div className="row text-center">
                    <div className="col">
                        <Icons
                            classContent="row mt-3 profyle fs-5 fw-bold"
                            classIcon="bi bi-geo-alt-fill m-0 p-0 text-primary fs-3"
                            classText="text-dark fs-4"
                            content=" Medellin - Antioquia"
                        />
                        <Icons
                            classContent="row mt-3 profyle fs-5 fw-bold"
                            classIcon="bi bi-telephone-fill m-0 p-0 text-primary fs-3"
                            classText="text-dark fs-4"
                            content=" 3194813298"
                        />
                        <Icons
                            classContent="row mt-3 profyle fs-5 fw-bold"
                            classIcon="bi bi-envelope-check-fill m-0 p-0 text-primary fs-3"
                            classText="text-dark fs-4"
                            content=" david.visitrack@gmail.com"
                        />
                        <Icons
                            classContent="row mt-3 profyle fs-5 fw-bold"
                            classIcon="bi bi-person-workspace m-0 p-0 text-primary fs-3"
                            classText="text-dark fs-4"
                            content=" Desarrollador FullStack"
                        />
                        <Icons
                            classContent="row mt-3 profyle fs-5 fw-bold"
                            classIcon="bi bi-mortarboard-fill m-0 p-0 text-primary fs-3"
                            classText="text-dark fs-4"
                            content=" Analisis y Desarrollo de Sistemas de Informacion (ADSI)"
                        />
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
            </div>
        </div>
    );
}

export default CardMaster;
