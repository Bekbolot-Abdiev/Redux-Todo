import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const RedaxTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const AddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      dispatch({ type: "add", text: newTodo });
      setNewTodo("");
    }
  };

  const handleChangeTodo = (id) => {
    dispatch({ type: "todo", id });
  };

  return (
    <div>
      <form onSubmit={AddTodo}>
        <div className="btn-inp">
          <input
            id="input"
            className="form-control"
            type="text"
            placeholder="todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="btn btn-primary" id="btn" type="submit">
            Add
          </button>
        </div>
      </form>
      <ul>
        {todos.map((el) => (
          <li
            className="list-group-item"
            key={el.id}
            onClick={() => handleChangeTodo(el.id)}
          >
            {el.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedaxTodo;
