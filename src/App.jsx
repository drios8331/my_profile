import Sidebar from "./components/Sidebar";
import Card_master from './components/Card_master';
import skills from "./skills";

export function App() {
    return (
        <>
            <div className="container">
                <div className="row bg-light shadow" style={{paddingTop: '10%'}}>
                    <div className="col-10 mt-5">
                        <Card_master imagen='Foto_David' p="Experiencia de 6 años dentro de cargos de administrativos enfocados al manejo de sistemas informáticos, visionario y proactivo con conocimientos avanzados en Sistemas Windows, Office, Internet, desarrollo de software (Laravel PhP, React JS, HTML, CSS, JavaScript, Composer, npm, JQuery, Ajax), diseño y administración de BD(MySQL), manejo de Git / Github. Gran capacidad de trabajo y actitud proactiva en el planteamiento, análisis y solución de problemas. Excelentes relaciones interpersonales y habilidades para el trabajo en equipo." title="David Rios Mejia"/>
                    </div>
                    <div className="col-2 mt-5">
                        <Sidebar clases={''}/>
                    </div>
                </div>
            </div>
        </>
    );
}
