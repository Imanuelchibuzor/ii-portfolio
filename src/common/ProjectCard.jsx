import PropTypes from "prop-types"

function ProjectCard({src, link, title, description}) {
  return (
    <a href={link} target='_blank'>
      <img className="hover" src={src} alt={`${title} logo`}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  )
}

export default ProjectCard

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}