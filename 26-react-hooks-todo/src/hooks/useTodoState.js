import useLocalStorageState from './useLocalStorageState';
import { v4 as uuid } from 'uuid';

export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
    
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
        },
        removeTodo: todoId => {
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            );
            setTodos(updatedTodos);
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, task:  newTask} : todo
            );
            setTodos(updatedTodos);
        },
    }
}