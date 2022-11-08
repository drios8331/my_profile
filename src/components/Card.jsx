function Card(props) {
  return (
    <>
      <div className="card hover-shadow">
        <div className={`card-body ${props.classCard}`}>{props.children}</div>
      </div>
    </>
  );
}

export default Card;
