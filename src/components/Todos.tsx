import React, { PropsWithChildren } from "react";

const Todos: React.FC<PropsWithChildren<{ items: string[] }>> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
