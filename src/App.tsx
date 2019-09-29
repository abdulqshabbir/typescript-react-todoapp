import React, { useState } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { Todos } from "./types";
import todoActions from "./actions";

function App(props: any) {
  const [newTodo, setNewTodo] = useState<string>("");
  const [showIncompleteTodos, setShowIncompleteTodos] = useState(false);
  const todos: Todos = props.todos;
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

const mapStateToProps = (state: Todos, ownProps: Todos) => ({
  todos: state
});

const mapDispatchToProps: MapDispatchToProps<any, any> = {
  deleteTodo: todoActions.deleteTodo,
  toggleTodo: todoActions.toggleTodo,
  addTodo: todoActions.addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
