export interface AppProps {
    todos: Todo[]
}
interface Todo {
    isComplete: boolean,
    text: string
}