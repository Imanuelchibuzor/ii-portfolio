import PropTypes from "prop-types"

function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="checkmark icon" />
      <p>{skill}</p>
    </span>
  )
}

export default SkillList

SkillList.propTypes = {
  src: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
}
