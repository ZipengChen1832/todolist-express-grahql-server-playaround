import React, { useEffect, useRef, useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import "./todolist.css";
import { gql, useQuery } from "@apollo/client";

const GET_TODO = gql`
  query {
    todo {
      id
      properties {
        content
        mood
      }
    }
  }
`;

export default function TodoListApp() {
  const [todos, setTodos] = useState([]);

  //   Graphql API
  const gqlTodos = useQuery(GET_TODO).data;
  useEffect(() => {
    if (gqlTodos && gqlTodos.todo) {
      console.log(gqlTodos.todo);
      const temp = gqlTodos.todo.map(todo=>{
        return {id:todo.id, content: todo.properties.content}
    })
        setTodos(temp);
    }
  }, [gqlTodos]);

  //RESTful API
//   useEffect(() => {
//     fetch("http://localhost:4000/api/todos")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         const temp = data.map(todo=>{
//             return {id:todo.id, content: todo.properties.content}
//         })
//         setTodos(temp);
//       })
//       .catch((err) => {
//         setTodos([]);
//         console.log(err);
//       });
//   }, []);

  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function removeTodo(id) {
    setTodos((prevTodos) => {
      const temp = [...prevTodos];
      return temp.filter((todo) => todo.id !== id);
    });
  }

  function editTodo(id, newTodo) {
    setTodos((prevTodos) => {
      const temp = [...prevTodos];
      return temp.map((todo) => (todo.id === id ? newTodo : todo));
    });
  }

  return (
    <div className="todolist-app">
      <TodoHeader addTodo={addTodo} />

      <div className="todolist">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            content={todo.content}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
}

function TodoHeader({ addTodo }) {
  const [newTodoContent, setNewTodoContent] = useState("");
  const newTodoRef = useRef();

  function handleAdd(e) {
    e.preventDefault();
    if (!newTodoRef.current.value) return;
    addTodo({ id: uuidv4(), content: newTodoContent });
    setNewTodoContent("");
  }

  return (
    <header className="header">
      <h1 className="header__title">Todolist</h1>
      <form className="header__form">
        <input
          type="text"
          className="header__form__input"
          placeholder="add todo item"
          ref={newTodoRef}
          value={newTodoContent}
          onChange={() => {
            setNewTodoContent(newTodoRef.current.value);
          }}
        />
        <button className="header__form__submit" onClick={handleAdd}>
          ADD
        </button>
      </form>
    </header>
  );
}
