import Bio from "./Bio";
import TechStack from "./TechStack";
import template from "./IMG_3974 (1).jpg";

const About = () => {
  const skills = [
    { name: "Flask", url: "https://img.icons8.com/ios/500/flask.png" },
    {
      name: "Python",
      url: "https://cdn-icons-png.flaticon.com/512/1822/1822920.png",
    },
    {
      name: "JavaScript",
      url: "https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png",
    },
    {
      name: "Java",
      url: "https://cdn-icons-png.flaticon.com/512/152/152760.png",
    },
    {
      name: "Express",
      url: "https://img.icons8.com/ios7/600/000000/express-js.png",
    },
    {
      name: "Node",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
    },
    {
      name: "React",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      name: "SQL",
      url: "https://cdn-icons-png.flaticon.com/512/4299/4299956.png",
    },
    {
      name: "PSQL",
      url: "https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png",
    },
    {
      name: "HTML",
      url: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
    },
    {
      name: "CSS",
      url: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
    },
  ];
  return (
    <main className="about">
      <section className="about-section">
        <section className="about-image">
          <img src={template} className="me" />
          <h3>About Me</h3>
        </section>
        <Bio />
      </section>
    </main>
  );
};

export default About;
