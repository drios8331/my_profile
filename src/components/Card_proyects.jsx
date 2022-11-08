import React from "react";
import Image from "./Image";
import Card from "./Card";

function Card_proyects({
    proyectName,
    image1,
    image2,
    image3,
    title,
    text,
    lenguaje,
    titulo,
}) {
    return (
        <>
            <Card classCard="p-5">
                <div className="row mb-3 text-center">
                    <div className="col"><h3 className="title_shadow">{titulo}</h3></div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div
                            id={proyectName}
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target={`#${proyectName}`}
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target={`#${proyectName}`}
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target={`#${proyectName}`}
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Image
                                        nameImage={image1}
                                        classImage="d-block w-100"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <Image
                                        nameImage={image2}
                                        classImage="d-block w-100"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <Image
                                        nameImage={image3}
                                        classImage="d-block w-100"
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev text-danger"
                                type="button"
                                data-bs-target={`#${proyectName}`}
                                data-bs-slide="prev"
                            >
                                <span
                                    className="bi bi-caret-left-fill fs-3 text-danger fw-bold"
                                    aria-hidden="false"
                                ></span>
                            </button>
                            <button
                                className="carousel-control-next text-danger"
                                type="button"
                                data-bs-target={`#${proyectName}`}
                                data-bs-slide="next"
                            >
                                <span
                                    className="bi bi-caret-right-fill fs-3 text-danger fw-bold"
                                    aria-hidden="true"
                                ></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="fs-3 text-center mb-3 bg-secondary rounded-2 text-white">
                            {title}
                        </div>
                        <div
                            style={{
                                height: "110px",
                                overflowY: "scroll",
                                paddingBottom: "0",
                            }}
                        >
                            <p className="fs-5 profyle">{text}</p>
                        </div>
                        <br />
                        <p>
                            <strong>Herramientas usadas: </strong>
                            {lenguaje}
                        </p>
                    </div>
                </div>
            </Card>
        </>
    );
}

export default Card_proyects;
