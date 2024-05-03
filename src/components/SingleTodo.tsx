import React, { useState } from "react";
import { Totos } from "../model";
import "../styles.css";
import { MdDelete, MdEdit } from "react-icons/md";

type props = {
  todo: Totos;
  todos: Totos[];
  settodos: React.Dispatch<React.SetStateAction<Totos[]>>;
};

    const SingleTodo = ({ todo, todos, settodos }: props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const editTodos=()=>{
        if(!edit){
            setEdit(!edit)
        }
    }
//EDIT FUNCTION
    const handleEdit=(e:React.FormEvent,id:number)=>{
        e.preventDefault();
        settodos(todos.map((todo)=>(
            todo.id===id?{...todo,todo:editTodo}:todo
        )))
        setEdit(false)
    }
//DELETE FUNCTION
    const handleDelete=(id:number)=>{
        settodos(todos.filter((todo)=>todo.id!==id))
    };
  return (
      
      <form className="single__todo" onSubmit={(e)=>{
        handleEdit(e,todo.id)
      }}>
        {edit?(
                <input value={editTodo} onChange={(e)=>{setEditTodo(e.target.value)}}/>
            ):(
                <span className="single__text">{todo.todo}</span>
            )
        }
    
      <span className="icon" onClick={()=>{
    editTodos()
      }}> 
        <MdEdit  />
      </span>
      <span className="icon" onClick={()=>{
        handleDelete(todo.id)
      }}>
        <MdDelete />
      </span>
    </form>
  );
};

export default SingleTodo;







