// import '../style.css';
import "antd/dist/antd.min.css";
import Title from "./Title";
import { Timeline } from "antd";
import Experience from "./Experience";
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
                  <Experience
                    imagen="Sena"
                    nameEmpresa="Sena"
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
