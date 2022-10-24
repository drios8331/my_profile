const image = require.context("../assets/imagOthers", true);

function Card({ imagen, title, p }) {
  return (
    <div className="card shadow">
      <div className="card-body">
        <img
          src={image(`./${imagen}.png`)}
          className="rounded-circle position-absolute top-0"
          width={"20%"}
          style={{}}
          alt=""
        />
        <div className="row text-center">
          <div className="col">
            <h1>{title}</h1>
            <p>{p}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
