// import '../style.css';
import "antd/dist/antd.min.css";
import Title from "./Title";
import { Timeline } from "antd";
import Experience from "./Experience";
import Card from './Card';
// const image = require.context("../assets/imagOthers", true);

function CardExp({ imagen, title, p }) {
  return (
    <div className="card hover-shadow">
      <div className="card-body p-5 d-flex justify-content-center">
        <div className="row text-center">
          <div className="row">
            <div className="col d-flex justify-content-center text-center">
              <Title classContent="text-center pb-4 mt-5 me-5" title={title} />
              <Timeline>
                <Timeline.Item>
                  <div className="row d-flex align-items-center">
                    <Experience
                      imagen="veLogo"
                      nameEmpresa="Galaxia Seguridad Ltda."
                      nameCargo="Web Developer"
                      date="Agosto 2014 - Actualmente"
                    />
                  </div>
                </Timeline.Item>
                <Timeline.Item color="Green">
                  <div className="row d-flex align-items-center">
                    <Experience
                      imagen="Alpha"
                      nameEmpresa="Alpha Seguridad Ltda."
                      nameCargo="Guarda de Seguridad"
                      date="Agosto 2011 - Mayo 2014"
                    />
                  </div>
                </Timeline.Item>
                <Timeline.Item color="Red">
                  <div className="row d-flex align-items-center">
                    <Experience
                      imagen="flag_soluciones"
                      nameEmpresa="Flag Soluciones"
                      nameCargo="Auxiliar Administrativo"
                      date="Junio 2008 - Enero 2009"
                    />
                  </div>
                </Timeline.Item>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardExp;
