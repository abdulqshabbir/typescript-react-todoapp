import { MouseEvent, FormEvent } from "react";
import { TodoAction as Actions } from "./types";
import uuid from "uuid";

export const deleteTodo = (
  e: MouseEvent<HTMLButtonElement>,
  index: string
): Actions => {
  return {
    type: "DELETE_TODO",
    id: index
  };
};

export const toggleTodo = (
  e: MouseEvent<HTMLLIElement>,
  index: string
): Actions => {
  return {
    type: "TOGGLE_TODO",
    id: index
  };
};

export const addTodo = (
  e: FormEvent<HTMLFormElement>,
  todoText: string
): Actions => {
  e.preventDefault();
  return {
    type: "ADD_TODO",
    id: uuid(),
    text: todoText
  };
};

export default {
  deleteTodo,
  toggleTodo,
  addTodo
};
