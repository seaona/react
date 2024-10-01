import React, { createContext, useReducer } from 'react';
import useTodoState from '../hooks/useTodoState';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
    { id: 1, task: "Mow the lawn using goats", completed: false },
    { id: 2, task: "Release lady bugs into garden", completed: true },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

// we split the context in 2 to make it more optimal and avoid re-renders
export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
};