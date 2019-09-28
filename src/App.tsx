import React, { MouseEvent, FormEvent, useState } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { Todos, Todo } from "./types";

interface Actions {
  type: string;
  id: number;
  text?: string;
}

export const todoReducer = (state: Todos, action: Actions) => {
  switch (action.type) {
    case "DELETE_TODO":
      return state.filter(t => t.id !== action.id);
    case "TOGGLE_TODO":
      return state.map(t =>
        t.id === action.id ? { ...t, isComplete: !t.isComplete } : t
      );
    case "ADD_TODO":
      const newTodo: Todo = {
        text: action.text,
        id: action.id,
        isComplete: false
      };
      return [...state, newTodo];
    default:
      return state;
  }
};

function App(props: any) {
  const [newTodo, setNewTodo] = useState("");
  const todos: Todos = props.todos;
  const todosLength = todos.length;
  console.log("todos state: ", todos);
  return (
    <div>
      <form onSubmit={event => props.addTodo(event, newTodo, todosLength)}>
        <label>Add a Todo:</label>
        <input
          onChange={event => setNewTodo(event.target.value)}
          type="text"
          name="todo"
          placeholder="Todo goes here..."
        />
        <button> Add a Todo</button>
      </form>
      {todos.map((t, index) => (
        <div
          key={index}
          style={{ textDecoration: t.isComplete ? "line-through" : undefined }}
        >
          <li onClick={event => props.toggleTodo(event, index)}>{t.text}</li>
          <button onClick={event => props.deleteTodo(event, index)}>
            Delete Todo
          </button>
        </div>
      ))}
    </div>
  );
}

const deleteTodo = (
  e: MouseEvent<HTMLButtonElement>,
  index: number
): Actions => {
  return {
    type: "DELETE_TODO",
    id: index
  };
};

const toggleTodo = (e: MouseEvent<HTMLLIElement>, index: number): Actions => {
  return {
    type: "TOGGLE_TODO",
    id: index
  };
};

const addTodo = (
  e: FormEvent<HTMLFormElement>,
  newTodo: string,
  todosLength: number
): Actions => {
  console.log("new todo: ", newTodo, "id: ", todosLength);
  e.preventDefault();
  return {
    type: "ADD_TODO",
    id: todosLength,
    text: newTodo
  };
};

const mapStateToProps = (state: Todos, ownProps: Todos) => ({
  todos: state
});

const mapDispatchToProps: MapDispatchToProps<any, any> = {
  deleteTodo,
  toggleTodo,
  addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
