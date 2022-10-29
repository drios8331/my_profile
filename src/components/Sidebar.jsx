import Skill from "./Skill";

function Sidebar({ clases }) {
    return (
        <div className={clases}>
            <div className="col">
                <Skill name="HTML5" />
                <Skill name="CSS" />
                <Skill name="PhP" />
                <Skill name="Bootstrap" />
                <Skill name="MySQL" />
                <Skill name="JavaScript" />
                <Skill name="Laravel" />
                <Skill name="ReactJS" />
                <Skill name="Ajax" />
                <Skill name="JQuery" />
                <Skill name="Github" />
                <Skill name="Composer" />
                <Skill name="npm" />
                <Skill name="Excel" />
            </div>
        </div>
    );
}

export default Sidebar;
