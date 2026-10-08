"use client";

import { ChangeEvent, useState } from "react";

type goal = {
  id: number;
  name: string;
  category: string;
};
type dailyTodo = {
  id: number;
  name: string;
  isDone: boolean;
};
export default function HOME() {
  const [goals, setGoals] = useState<goal[]>([]);
  const [dailyTodo, setDailyTodo] = useState<dailyTodo[]>([]);
  const [gInput, setgInput] = useState({
    name: "",
    category: "",
  });
  const [dailyInput, setDailyInput] = useState({
    name: "",
    isDone: false,
  });
  const changeDinputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked } = e.target;
    if (name === "name") {
      setDailyInput({ ...dailyInput, name: value });
    } else {
      setDailyInput({ ...dailyInput, isDone: checked });
    }
  };
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setgInput({ ...gInput, name: value });
    } else {
      setgInput({ ...gInput, category: value });
    }
  };
  const createGoal = () => {
    setGoals((prev) => [
      ...prev,
      { id: Date.now(), category: gInput.category, name: gInput.name },
    ]);
  };
  const createTodo = () => {
    setDailyTodo((prev) => [
      ...prev,
      { id: Date.now(), name: dailyInput.name, isDone: dailyInput.isDone },
    ]);
  };
  console.log(gInput);
  console.log(dailyTodo);
  return (
    <div className="w-[100vw] ">
      <div>
        <input type="text" name="name" onChange={(e) => changeInputValue(e)} />
        <input
          type="text"
          name="category"
          onChange={(e) => changeInputValue(e)}
        />
        <button onClick={() => createGoal()}>create goal</button>
        <div>
          {goals.map((g) => {
            return <div key={g.id}>{g.name}</div>;
          })}
        </div>
      </div>
      <div>
        <input type="text" name="name" onChange={(e) => changeDinputValue(e)} />
        <input
          type="checkbox"
          name="isDone"
          onChange={(e) => changeDinputValue(e)}
        />
        <button onClick={() => createTodo()}>create todo</button>
        <div>
          {dailyTodo.map((todo) => {
            return <div key={todo.id}>{todo.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
