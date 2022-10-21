const imageSkill = require.context('../assets/imagSkills', true);

function SkillList({name}) {

  return (
    <div>
      <div className="card mb-2">
        <div className="card-body text-center bg-secondary pb-0 d-flex justify-content-center">
          <div className="col">
            <div className="row">
              <div className="bg-white rounded-circle d-flex justify-content-center">
                <img src={imageSkill(`./${name}.png`)} className="img-fluid" width="80%" alt="" />
              </div>
            </div>
            <div className="row">
              <h5>{name}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default SkillList;
