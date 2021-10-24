import { useState } from 'react'

function useTodo() {
    const [todos, setTodos] = useState([])
    const [showToggleBtn, setShowToggleBtn] = useState(false)
    const [editTodo, setEditTodo] = useState("")
    const delTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const removeAll = () => {
        setTodos([])
    }

    const handleAdd = (todo, setTodoInput) => {
        const id = Date.now()
        setTodos([...todos, { id, todo, isComplete: false }])
        setTodoInput("")
    }

    const handleEdit = (id) => {

        const findData = todos.find(todo => todo.id === id)
        setShowToggleBtn(true)
        setEditTodo(findData)

    }

    const handleToggleEdit = (id, setTodoInput, todoInput) => {

        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.todo = todoInput
            }
            return todo
        }))
        setTodoInput("")
        setShowToggleBtn(false)
    }

    const handleCompleted = (id) => {

        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        }))

    }

    return {
        todos,
        delTodo,
        removeAll,
        handleAdd,
        handleEdit,
        showToggleBtn,
        editTodo,
        setEditTodo,
        handleToggleEdit,
        handleCompleted
    }
}

export default useTodo
