import Sidebar from "./components/Sidebar";
import CardMaster from "./components/Card_master";
import CardExp from "./components/Card_experience";
import CardStudy from "./components/Card_study";
import Coffe from "./components/Coffe";
import BotonFloat from "./components/Boton_flotante";
import Button_coffe from './components/Button_coffe'
// import './script';
import skills from "./skills";

export function App() {
    return (
        <>
            <div className="container-fluid" style={{ width: "100%" }}>
                <div
                    className="row bg-light shadow"
                    style={{ paddingTop: "10%" }}
                >
                    <div className="col-xl-10 col-lg-10 col-md-8 col-sm-8 col-8 mt-5 position-relative">
                        <CardMaster
                            imagen="Foto_David"
                            p="Experiencia de 6 años dentro de cargos de administrativos enfocados al manejo de sistemas informáticos, visionario y proactivo con conocimientos avanzados en Sistemas Windows, Office, Internet, desarrollo de software (Laravel PhP, React JS, HTML, CSS, JavaScript, Composer, npm, JQuery, Ajax), diseño y administración de BD(MySQL), manejo de Git / Github. Gran capacidad de trabajo y actitud proactiva en el planteamiento, análisis y solución de problemas. Excelentes relaciones interpersonales y habilidades para el trabajo en equipo."
                            title="David Rios Mejia"
                        />
                        <br />
                        <CardExp title="Experiencia laboral" />
                        <br />
                        <CardStudy title="Educación" />
                        <br />
                        <Button_coffe className="position-absolute "/>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mt-5">
                        <Sidebar className="position-relative"/>
                        {/* <BotonFloat className="position-absolute"/> */}
                    </div>
                </div>
            </div>
        </>
    );
}
