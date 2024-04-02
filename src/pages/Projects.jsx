import projectsData from "data/projects.json";
import ProjectItem from "components/ProjectItem";

function Projects() {
  return (
    <ul>
      {projectsData.map((project) => (
        <li key={project.id}>
          <ProjectItem project={project} />
        </li>
      ))}
    </ul>
  );
}

export default Projects;
