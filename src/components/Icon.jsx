import "bootstrap-icons/font/bootstrap-icons.css";

function Icons({classContent, content, classIcon, classText}) {
  return (
    <div className={classContent}>
      <i className={classIcon}><span className={classText}>{content}</span></i>
    </div>
  );
}

export default Icons;
