import Image from "./Image";

function Experience({ imagen, nameEmpresa, nameCargo, date, estudio = "" }) {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-2 col-sm-1 justify-content-center d-flex align-items-center">
          <Image
            nameImage={imagen}
            classImage=""
            styleImage={{ width: "55px" }}
          />
        </div>
        <div className="col-lg-9 col-md-10 col-sm-11 text-start fs-5">
          <div className="row">
            <div className="col-12 px-0">{nameEmpresa}</div>
            <div className="row">
              <div className="col px-0">
                <strong>{estudio}</strong>
              </div>
            </div>
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
