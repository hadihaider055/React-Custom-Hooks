import React, { useState, useEffect } from 'react'
import useTodo from '../../hooks/useTodo'

const Todo = () => {
    const [todoInput, setTodoInput] = useState('')
    const {
        todos,
        delTodo,
        removeAll,
        handleAdd,
        handleEdit,
        showToggleBtn,
        editTodo,
        handleToggleEdit,
        handleCompleted
    } = useTodo()


    useEffect(() => {
        if (editTodo) {
            setTodoInput(editTodo.todo)
        }
    }, [editTodo])


    return (
        <div className="todo__container">
            <div className="header__todo__container">
                <h2 className="header__heading">React Todo Application📝</h2>
            </div>
            <div className="todo__input__div">
                <input
                    type="text"
                    placeholder="✍ Enter your task Todo"
                    className="todo__input"
                    value={todoInput}
                    required
                    onChange={(e) => setTodoInput(e.target.value)}
                />

                {showToggleBtn ? (
                    <i
                        className="far fa-edit add__todo toggle__edit"
                        onClick={() => handleToggleEdit(editTodo.id, setTodoInput, todoInput)}
                        title="Edit Todo"
                    ></i>
                ) : (
                    <i
                        className="fa fa-plus add__todo"
                        onClick={() => handleAdd(todoInput, setTodoInput)}
                        title="Add Todo"
                    ></i>
                )}
            </div>  <div className="todo__body">
                {todos.map((item) => {
                    return (
                        <div className="todo__item__div" key={item.id}>
                            <div className="todo__item__withCheck">
                                <input type="checkbox" name="completed" className="todo__item__checkbox" onClick={() => handleCompleted(item.id)} />
                                <h3 className="todo__task__name">{item.todo}</h3>
                            </div>
                            <div className="todo__task__icons">
                                <i
                                    className="far fa-edit todo__task__edit"
                                    title="Edit Todo"
                                    onClick={() => handleEdit(item.id)}
                                ></i>
                                <i
                                    className="far fa-trash-alt todo__task__del"
                                    onClick={() => delTodo(item.id)}
                                    title="Delete Todo"
                                ></i>
                            </div>
                        </div>
                    );
                })}
            </div>
            {todos.length > 0 ? (
                <div className="todo__footer">
                    <button
                        className="button__remove__all"
                        onClick={removeAll}
                        title="Remove All"
                    >
                        Remove All <i className="far fa-trash-alt todo__task__del"></i>
                    </button>
                </div>
            ) : null}
        </div>
    )
}

export default Todo
