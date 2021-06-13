import React, { useState, useCallback } from 'react'

import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = useCallback(
        (todo) => {
            if (!todo.text || /^\s*$/.test(todo.text)) {
                return
            }

            const newTodos = [todo, ...todos]
            setTodos(newTodos);
        },
        [todos],
    )

    const updateTodo = useCallback(
        (todoId, newValue) => {
            if (!newValue.text || /^\s*$/.test(newValue.text)) {
                return
            }

            setTodos(prev => prev.map(item => item.id === todoId ? newValue : item));
        },
        [],
    )

    const removeTodo = useCallback(
        (id) => {
            const removeArr = [...todos].filter(todo => todo.id !== id)

            setTodos(removeArr);
        },
        [todos],
    )

    console.log("todos", todos);

    const completeTodo = useCallback(
        (id) => {
            console.log('lol');
            const updatedTodos = todos.map(todo => {
                if (todo.id === id) {
                    todo.isComplete = !todo.isComplete;
                }
                return todo;
            })
            setTodos(updatedTodos);
        },
        [todos],
    )

    return (
        <div>
            <h1>Bla bla bla </h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                updateTodo={updateTodo}
                removeTodo={removeTodo}
            />
        </div>
    )
}

export default TodoList
