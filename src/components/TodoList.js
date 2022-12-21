import React from "react";
import { useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { filteredTodoListState } from "../recoil_state";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      

    </>
  );
};

export default TodoList;
