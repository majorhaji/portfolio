import { useEffect, useState } from "react";

const Stack = ({ skill }) => {
  const [tech, setSkill] = useState({});
  useEffect(() => {
    setSkill(skill);
  });
  return (
    <div className="skill">
      <h4>{tech.name}</h4>
    </div>
  );
};

export default Stack;
