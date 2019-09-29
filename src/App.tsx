import React, { MouseEvent, FormEvent, useState } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { Todos, Todo } from "./types";
import uuid from "uuid";

interface Actions {
  type: string;
  id: string;
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
  const [newTodo, setNewTodo] = useState<string>("");
  const [showIncompleteTodos, setShowIncompleteTodos] = useState(false);
  const todos: Todos = props.todos;
  console.log("redux state", todos);
  return (
    <div>
      <form onSubmit={event => props.addTodo(event, newTodo)}>
        <label>Add a Todo:</label>
        <input
          onChange={event => setNewTodo(event.target.value)}
          type="text"
          name="todo"
          placeholder="Todo goes here..."
        />
        <button> Add a Todo</button>
      </form>
      {todos
        .filter(t => {
          if (showIncompleteTodos) {
            return t.isComplete ? false : t;
          } else {
            return t;
          }
        })
        .map(t => (
          <div
            key={t.id}
            style={{
              textDecoration: t.isComplete ? "line-through" : undefined
            }}
          >
            <li onClick={event => props.toggleTodo(event, t.id)}>{t.text}</li>
            <button onClick={event => props.deleteTodo(event, t.id)}>
              Delete Todo
            </button>
          </div>
        ))}
      <button onClick={() => setShowIncompleteTodos(!showIncompleteTodos)}>
        {showIncompleteTodos ? "Show all todos" : "Show incomplete todos"}
      </button>
    </div>
  );
}

const deleteTodo = (
  e: MouseEvent<HTMLButtonElement>,
  index: string
): Actions => {
  return {
    type: "DELETE_TODO",
    id: index
  };
};

const toggleTodo = (e: MouseEvent<HTMLLIElement>, index: string): Actions => {
  return {
    type: "TOGGLE_TODO",
    id: index
  };
};

const addTodo = (e: FormEvent<HTMLFormElement>, todoText: string): Actions => {
  e.preventDefault();
  return {
    type: "ADD_TODO",
    id: uuid(),
    text: todoText
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
