export interface AppProps {
    todos: Todo[]
}
export type Todos = Todo[]

export interface Todo {
    isComplete: boolean,
    text: string | undefined,
    id: number
}