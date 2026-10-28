"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type DailyTodo = {
  id: string;
  name: string;
  isDone: boolean;
};

export default function HOME() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState<DailyTodo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const findTodos = async () => {
      const res = await fetch("/api/dailyTodo");
      const data = await res.json();
      setTodos(data);
    };

    findTodos();
  }, []);

  const changeTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const createTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todoInput.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/dailyTodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: todoInput.trim(),
        }),
      });

      if (!res.ok) throw new Error("Failed to create todo");

      const todo = await res.json();
      setTodos((prev) => [...prev, todo]);
      setTodoInput("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Daily Todos</h1>

      <form onSubmit={createTodo} className="mb-6 flex gap-2">
        <input
          type="text"
          value={todoInput}
          onChange={changeTodoInput}
          placeholder="Enter a todo..."
          className="flex-1 rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </form>

      <div className="space-y-3">
        {todos.length === 0 ? (
          <p className="text-gray-500">No todos yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 rounded-lg border p-4"
            >
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => {
                  setTodos((prev) =>
                    prev.map((item) =>
                      item.id === todo.id
                        ? { ...item, isDone: !item.isDone }
                        : item,
                    ),
                  );
                }}
                className="h-4 w-4"
              />

              <span
                className={
                  todo.isDone ? "text-gray-400 line-through" : "text-gray-800"
                }
              >
                {todo.name}
              </span>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
