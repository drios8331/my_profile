import Sidebar from "./components/Sidebar";
import CardMaster from "./components/Card_master";
import CardExp from "./components/Card_experience";
import CardStudy from "./components/Card_study";
import CardProyects from "./components/Card_proyects";
import CardOthers from "./components/Card_Others";
// import Coffe from "./components/Coffe";
// import BotonFloat from "./components/Boton_flotante";
import ButtonCoffe from "./components/Button_coffe";
// import { Icon123 } from "react-bootstrap-icons";
// import './script';
// import skills from "./skills";

export function App() {
    return (
        <>
            <div className="container-xxl py-3" style={{ height: "100%" }}>
                <div className="container-fluid">
                    <div className="row" style={{ paddingTop: "10%" }}>
                        <div className="col-xl-10 col-lg-10 col-md-8 col-sm-8 col-8 mt-5 position-relative">
                            <CardMaster
                                imagen="Foto_David"
                                p="Experiencia de 6 años en de cargos administrativos enfocados al manejo de sistemas informáticos, visionario y proactivo, con conocimientos avanzados en Sistemas Windows, Office, Internet, desarrollo de software (Laravel PhP, React JS, HTML, CSS, JavaScript, Bootstrap, Composer, npm, JQuery, Ajax), diseño y administración de BD(MySQL), manejo de Git / Github. Con capacidad de trabajo y actitud proactiva en el planteamiento, análisis y solución de problemas. Adecuadas relaciones interpersonales y habilidades para el trabajo en equipo."
                                title="David Rios M.."
                            />
                            <hr />
                            <CardExp title="Experiencia laboral" />
                            <hr />
                            <CardStudy title="Educación" />
                            <hr />
                            <CardProyects
                                proyectName="ProyectoSena"
                                image1="FotoSlaider3"
                                image2="FotoSlaider2"
                                image3="FotoSlaider1"
                                title="LYD System"
                                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur assumenda adipisci dolorem quas odio excepturi saepe officiis hic et, sint nesciunt nam, reiciendis dicta, omnis dolor ipsam numquam commodi eos!"
                            />
                            <hr />
                            <CardProyects
                                proyectName="ReservasVehiculos"
                                image1="Reservasok"
                                image2="Reservasok1"
                                image3="Reservasok3"
                                title="Reservas Vehiculares"
                                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur assumenda adipisci dolorem quas odio excepturi saepe officiis hic et, sint nesciunt nam, reiciendis dicta, omnis dolor ipsam numquam commodi eos!"
                            />
                            <hr />
                            <CardProyects
                                proyectName="ControlEscoltas"
                                image1="Escoltas1"
                                image2="Escoltas2"
                                image3="Escoltas3"
                                title="Control de Escoltas"
                                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur assumenda adipisci dolorem quas odio excepturi saepe officiis hic et, sint nesciunt nam, reiciendis dicta, omnis dolor ipsam numquam commodi eos!"
                            />
                            <hr />
                            <CardProyects
                                proyectName="AnalisisSeguridad"
                                image1="Analisis01"
                                image2="Analisis02"
                                image3="Analisis03"
                                title="Analisis de Seguridad"
                                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur assumenda adipisci dolorem quas odio excepturi saepe officiis hic et, sint nesciunt nam, reiciendis dicta, omnis dolor ipsam numquam commodi eos!"
                            />
                            <hr />
                            <CardProyects
                                proyectName="ControlAcceso"
                                image1="Acceso01"
                                image2="Acceso02"
                                image3="Acceso03"
                                title="Control de Acceso"
                                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur assumenda adipisci dolorem quas odio excepturi saepe officiis hic et, sint nesciunt nam, reiciendis dicta, omnis dolor ipsam numquam commodi eos!"
                            />
                            <hr />
                            <CardProyects
                                proyectName="GaleriaImagenes"
                                image1="Galeria01"
                                image2="Galeria02"
                                image3="Galeria03"
                                title="Galeria de Imagenes"
                                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur assumenda adipisci dolorem quas odio excepturi saepe officiis hic et, sint nesciunt nam, reiciendis dicta, omnis dolor ipsam numquam commodi eos!"
                            />
                            <hr />
                            <CardOthers />
                            <ButtonCoffe className="position-absolute" />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mt-5">
                            <Sidebar className="position-relative" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
