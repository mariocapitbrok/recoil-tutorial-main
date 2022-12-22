import { atom, selector } from 'recoil'

const todoListState = atom({
  key: 'todoList',
  default: [],
})

export { todoListState }
