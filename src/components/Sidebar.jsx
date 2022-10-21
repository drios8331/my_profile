import Skill from "./Skill";

function Sidebar({ clases }) {
  return (
    <div className={clases}>
      <Skill name="HTML5" />
      <Skill name="CSS" />
      <Skill name="PHP" />
      <Skill name="MySQL" />
      <Skill name="JavaScript" />
      <Skill name="Laravel" />
      <Skill name="React" />
      <Skill name="Ajax" />
      <Skill name="JQuery" />
      <Skill name="Github" />
      <Skill name="composer" />
      <Skill name="npm" />
      <Skill name="Excel" />
    </div>
  );
}

export default Sidebar;
