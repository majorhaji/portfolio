const { addProject } = require("./firebase");
const fs = require("fs/promises");

fs.readFile("./projects.json", "utf-8")
  .then((data) => {
    const parsed = JSON.parse(data);
    const projectArr = parsed.projects;
    projectArr.forEach((project) => {
      addProject(project);
    });
  })
  .catch((err) => {
    console.log(err, "failed to read projects.json");
  });
