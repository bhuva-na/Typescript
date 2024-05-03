import React from "react";
import { Totos } from "../model";
import SingleTodo from "./SingleTodo";
interface props {
  todos: Totos[];
  settodos: React.Dispatch<React.SetStateAction<Totos[]>>;
}
const TodoList: React.FC<props> = ({ todos, settodos }) => {
  return (
    <div>
      {todos.map((s) => (
        <SingleTodo todo={s} key={s.id} todos={todos} settodos={settodos} />
      ))}
    </div>
  );
};

export default TodoList;
