import Sidebar from "./components/Sidebar";
import Card from './components/Card';
import skills from "./skills";

export function App() {
    return (
        <>
            <div className="container">
                <div className="row bg-light shadow pt-5">
                    <div className="col-10 mt-5">
                        <Card imagen='Foto_David' p="Esto es un parrafo escrito para el portafolio" title="David Rios Mejia"/>
                    </div>
                    <div className="col-2 mt-5">
                        <Sidebar clases={''}/>
                    </div>
                </div>
            </div>
        </>
    );
}
