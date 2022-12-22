import React from 'react'
import { useRecoilValue } from 'recoil'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'
import { todoListState } from '../recoil_state'

const TodoList = () => {
  const todoList = useRecoilValue(todoListState)
  return (
    <>
      <TodoItemCreator />
      {todoList.map(todoItem => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  )
}

export default TodoList
