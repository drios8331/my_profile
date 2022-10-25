import '../style.css';
const image = require.context("../assets/imagOthers", true);

function Card({ imagen, title, p }) {
  return (
    <div className="card shadow">
      <div className="card-body p-5">
        <img
          src={image(`./${imagen}.png`)}
          className="image-profyle rounded-circle position-absolute top-0 shadow-lg"
          width={"15%"}
          style={{marginTop: '-10%'}}
          alt=""
        />
        <div className="row text-center">
          <div className="col">
            <h1 className='fst-italic text-center pt-3'>{title}</h1>
            <h5 className='mt-5 profyle'>Ciudad: Medellin - Antioquia</h5>
            <h5 className='mt-3 profyle'>Perfil: Desarrollador FullStack</h5>
            <p className='mt-4 profyle'>{p}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
