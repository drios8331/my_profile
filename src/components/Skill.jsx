import Image from './Image';

function SkillList({ name }) {
  return (
    <div>
      <div className="card mb-2 hover-zoom">
        <div className="card-body text-center rounded-3">
          <div className="col d-flex justify-content-center">
            <div className="row d-inline-flex">
              <Image nameImage={name}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillList;
