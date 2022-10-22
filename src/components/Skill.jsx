const imageSkill = require.context("../assets/imagSkills", true);

function SkillList({ name }) {
    return (
        <div>
            <div className="card mb-2">
                <div className="card-body text-center bg-secondary pb-0">
                    <div className="col-12">
                        <div className="row">
                            <img
                                src={imageSkill(`./${name}.png`)}
                                className="img-fluid"
                                width="100%"
                                alt=""
                            />
                            <h5>{name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillList;
