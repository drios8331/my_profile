const imageSkill = require.context("../assets/imagSkills", true);

function SkillList({ name }) {
  return (
    <div>
      <div className="card mb-2">
        <div className="card-body text-center bg-secondary p-0">
          <div className="col d-flex justify-content-center ">
            <div className="row d-inline-flex">
              <img src={imageSkill(`./${name}.png`)} className="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillList;
