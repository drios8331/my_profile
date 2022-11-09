function Title({ classContent, ClassTitle, title }) {
  return (
    <div className={classContent}>
       <h1 className={ClassTitle} style={{fontStyle: "italic"}}>{title}</h1>
    </div>
  );
}

export default Title;
