import "bootstrap-icons/font/bootstrap-icons.css";

function Icons({classContent, content, classIcon, classText}) {
  return (
    <div className={classContent}>
      <i className={`m-0 p-0 text-primary fs-3 ${classIcon}`}><span className={classText}>{content}</span></i>
    </div>
  );
}

export default Icons;
