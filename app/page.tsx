"use client";

import { useState } from "react";

type Task = {
  id: string;
  todo: string;
  isDone: boolean;
};

export default function HOME() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState("");

  const createToDo = () => {
    if (!task.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        todo: task,
        isDone: false,
      },
    ]);

    setTask("");
  };

  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="mb-6 text-2xl font-bold">Todo</h1>

      <div className="flex gap-2">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") createToDo();
          }}
          placeholder="Add a task..."
          className="flex-1 border border-gray-300 px-3 py-2 outline-none"
        />

        <button onClick={createToDo} className="bg-black px-4 py-2 text-white">
          Add
        </button>
      </div>

      <div className="mt-6">
        {tasks.map((t) => (
          <div key={t.id} className="flex items-center gap-2 border-b py-3">
            <input type="checkbox" />

            <span>{t.todo}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
