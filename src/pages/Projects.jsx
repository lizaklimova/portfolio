import projectsData from "data/projects.json";

function Projects() {
  return (
    <ul>
      {projectsData.map((project) => (
        <li></li>
      ))}
    </ul>
  );
}

export default Projects;
