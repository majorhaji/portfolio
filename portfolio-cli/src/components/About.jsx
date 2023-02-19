import Bio from "./Bio";
import TechStack from "./TechStack";
const About = () => {
  const skills = [
    { name: "Flask" },
    { name: "Python" },
    { name: "JavaScript" },
    { name: "Java" },
    { name: "Express" },
    { name: "Node" },
    { name: "React" },
    { name: "SQL" },
    { name: "PSQL" },
    { name: "HTML" },
    { name: "CSS" },
  ];
  return (
    <main className="about">
      <section className="about-image"></section>
      <Bio />
      <aside className="tech-stack">
        {skills.map((skill) => {
          return <TechStack skill={skill} />;
        })}
      </aside>
    </main>
  );
};

export default About;
