const imageSkill = require.context("../assets/imagSkills", true);

function Image({classImage, nameImage, styleImage }) {
  return (
      <img
        src={imageSkill(`./${nameImage}.png`)}
        className={classImage}
        style={styleImage}
        alt=""
      />
  );
}

export default Image;
