import React, { useEffect, useRef, useState } from "react";

export default function Todo({ content, id, removeTodo, editTodo }) {
  const [editing, toggleEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const contentRef = useRef();

  useEffect(() => {
    setInputValue(content);
  }, [content]);

  function handleDelete() {
    removeTodo(id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    toggleEditing(!editing);
    editTodo(id,{id,content:inputValue});
  }

  function handleChange(e) {
      setInputValue(contentRef.current.value);
  }

  return editing ? (
    <form className="todo">
      <input
        className="todo__edit"
        value={inputValue}
        onChange={handleChange}
        ref={contentRef}
      />
      <button className="todo__btn todo__btn--success" onClick={handleSubmit}>
        Save
      </button>
    </form>
  ) : (
    <div className="todo">
      <span className="todo__content">{inputValue}</span>
      <span className="todo__btns-container">
        <button
          className="todo__btn todo__btn--success"
          onClick={() => {
            toggleEditing(!editing);
          }}
        >
          Edit
        </button>
        <button className="todo__btn todo__btn--danger" onClick={handleDelete}>
          Delete
        </button>
      </span>
    </div>
  );
}
