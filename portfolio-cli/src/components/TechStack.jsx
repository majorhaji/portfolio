import { useEffect, useState } from "react";

const Stack = ({ skill }) => {
  const [tech, setSkill] = useState({});
  useEffect(() => {
    setSkill(skill);
  });
  return (
    <div className="skill">
      <h4>{tech.name}</h4>
      {tech.icon}
    </div>
  );
};

export default Stack;
