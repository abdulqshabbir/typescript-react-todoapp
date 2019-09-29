import { Todos, Todo, TodoAction } from "./types";

export const todoReducer = (state: Todos, action: TodoAction) => {
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
