import Card from "./Card";
import Image from "./Image";

function Card_Others() {
    return (
        <>
            <Card>
                <div className="fs-4 text-center fw-bold mb-3">
                    Otros Conocimientos
                </div>
                <div className="row mb-3">
                    <div className="col-3 text-center pt-2">
                        <Image nameImage="dtr720" classImage="w-75" />
                    </div>
                    <div className="col-3 profyle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos iure odit suscipit maiores repellendus vitae
                        nobis, vero quo nostrum animi odio, voluptatem pariatur
                        excepturi voluptatibus voluptate eaque id ad neque?
                    </div>
                    <div className="col-3 profyle text-center pt-4">
                        <Image nameImage="Computador" classImage="w-75" />
                    </div>
                    <div className="col-3 profyle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos iure odit suscipit maiores repellendus vitae
                        nobis, vero quo nostrum animi odio, voluptatem pariatur
                        excepturi voluptatibus voluptate eaque id ad neque?
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-3 text-center pt-5">
                        <Image nameImage="Celular" classImage="w-50" />
                    </div>
                    <div className="col-3 profyle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos iure odit suscipit maiores repellendus vitae
                        nobis, vero quo nostrum animi odio, voluptatem pariatur
                        excepturi voluptatibus voluptate eaque id ad neque?
                    </div>
                </div>
            </Card>
        </>
    );
}

export default Card_Others;
