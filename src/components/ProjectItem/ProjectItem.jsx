const ProjectItem = ({
  project: {
    projectName,
    pageLink,
    links,
    title,
    role,
    description,
    technologies,
  },
}) => {
  return (
    <div>
      <div>
        <a href={pageLink}>{projectName}</a>
        <div>
          {links.map((link, index) => (
            <a key={index} href={link.link}>
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
