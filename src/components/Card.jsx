function Card(props) {
  return (
    <>
      <div className="card hover-shadow">
        <div className="card-body p-5">{props.children}</div>
      </div>
    </>
  );
}

export default Card;
