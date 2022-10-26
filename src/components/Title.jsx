function Title({ classContent, ClassTitle, title }) {
  return (
    <div className={classContent}>
      <h1 className={ClassTitle}>{title}</h1>
    </div>
  );
}

export default Title;
