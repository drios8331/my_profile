import { AlignCenter } from "react-bootstrap-icons";
import Image from "./Image";

function Experience({ imagen, nameEmpresa, nameCargo, date }) {
  return (
    <>
      <div className="row">
        <div className="col-3 px-0 mx-0 text-center d-flex justify-content-center">
          <Image
            nameImage={imagen}
            classImage=""
            styleImage={{ width: "55px" }}
          />
        </div>
        <div className="col text-start">
          <div className="row">
            <div className="col-12 px-0">{nameEmpresa}</div>
            <div className="row">
              <div className="col px-0">
                <strong>{nameCargo}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col px-0">{date}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
