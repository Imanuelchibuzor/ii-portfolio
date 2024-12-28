import styles from './ProjectsStyles.module.css';
import { projectsData } from "../../common/projectsData";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <a href={project.link} target='_blank' key={index}>
            <img className="hover" src={project.image} alt={`${project.title} logo`}/>
            <h3>{project.title}</h3>
            <p>{project.techStack}</p>
          </a>
        ))}
      </div>
    </section>
  )
};

export default Projects