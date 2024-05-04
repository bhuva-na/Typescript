import React from "react";
import { Todos } from "../model";
import SingleTodo from "./SingleTodo";
interface props {
  todos: Todos[];
  settodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}
const TodoList: React.FC<props> = ({ todos, settodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} todos={todos} settodos={settodos} />
      ))}
    </div>
  )
};

export default TodoList;
