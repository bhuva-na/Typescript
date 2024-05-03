import { useState } from "react";
import InputFeilds from "./components/InputFeilds";
import { Totos } from "./model";
import { Badge } from "react-bootstrap";
import TodoList from "./components/TodoList";
import "./styles.css";

function App() {
  let [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Totos[]>([]);

  let handletodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      settodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isDone: false,
        },
      ]);
      settodo("");
    }
  };
  console.log(todos);
  return (
    <div>
      <h2>
        <Badge bg="secondary">MY TASKS</Badge>
      </h2>
      <InputFeilds todo={todo} settodo={settodo} handletodo={handletodo} />
      <TodoList  todos={todos} settodos={settodos} />
      
    </div>
  );
}

export default App;
