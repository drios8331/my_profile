import "../style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Icon from "react-bootstrap-icons";
import Image from "./Image";
import Title from "./Title";
import Parrafo from "./Parrafo";
import SubTitle from "./SubTitle";
// const image = require.context("../assets/imagSkills", true);

function CardMaster({ imagen, title, p }) {
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
            <Icon.GeoAlt/>
            <SubTitle
              classContent="row"
              classSubTitle="mt-3 profyle fs-5 fw-bold"
              subTitle="Medellin - Antioquia"
            />
            <SubTitle
              classContent="row"
              classSubTitle="mt-3 profyle fs-5 fw-bold"
              subTitle="Desarrollador FullStack"
            />
            <SubTitle
              classContent="row"
              classSubTitle="mt-3 profyle fs-5 fw-bold"
              subTitle="Analisis y Desarrollo de Sistemas de Informacion (ADSI)"
            />
            <Parrafo
              classContent="row"
              classParrafo="mt-4 profyle"
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
