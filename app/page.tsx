"use client";

import { ChangeEvent, useState } from "react";

type goal = {
  id: string;
  name: string;
  category: string;
};
type dailyTodo = {
  id: string;
  name: string;
  isDone: boolean;
};
export default function HOME() {
  const [todoInput, setTodoInput] = useState<string>();
  const changeTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };
  const createTodo = async () => {
    const todo = await fetch("/api/dailyTodo", {});
  };
  return <div></div>;
}
