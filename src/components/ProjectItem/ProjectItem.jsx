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
  // {
  //   "id": "1",
  //   "projectName": "Task Pro",
  //   "pageLink": "https://lizaklimova.github.io/task-pro/",
  //   "links": [
  //     {
  //       "text": "GitHub (FE)",
  //       "link": "https://github.com/lizaklimova/task-pro"
  //     },
  //     {
  //       "text": "GitHub (BE)",
  //       "link": "https://github.com/chanankuan/task-pro-rest-api"
  //     }
  //   ],
  //   "title": "Project management app",
  //   "role": "Team Lead – Developer",
  //   "description": "TaskPro is an application designed for efficient task and project management. It provides a convenient way to organize tasks and collaborate with teams. Users can create boards to represent various projects or work areas, with the flexibility to add cards for tracking progress and priorities. Key features include the ability to drag and drop cards between columns for seamless workflow organization. Moreover, TaskPro introduces enhanced functionalities such as task statistics categorized by deadline and priority, along with a task calendar for improved scheduling",
  //   "technologies": [
  //     "React.js",
  //     "Redux Toolkit",
  //     "Redux Persist",
  //     "Styled components",
  //     "NodeJS",
  //     "Express",
  //     "Cloudinary",
  //     "MongoDB",
  //     "Mongoose",
  //     "Google OAuth",
  //     "JWT"
  //   ]
  // },
  return (
    <div>
      {/* <img src={} alt='project preview'/> */}
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
