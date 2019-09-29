export interface AppProps {
  todos: Todo[];
}

export interface AppState {
  todos: Todo[];
}

export type Todos = Todo[];

export interface Todo {
  isComplete: boolean;
  text: string | undefined;
  id: string;
}

export interface TodoAction {
  text?: string;
  type: string;
  id: string;
}
