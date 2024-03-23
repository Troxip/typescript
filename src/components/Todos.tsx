import React, { PropsWithChildren } from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<PropsWithChildren<{ items: Todo[] }>> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
