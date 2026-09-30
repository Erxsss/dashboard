"use client";
import { ChangeEvent, useState } from "react";
type task = {
  id: string;
  todo: string;
  isDone: boolean;
};
export default function HOME() {
  const [tasks, setTasks] = useState<task[]>([]);
  const [task, setTask] = useState({
    id: "",
    todo: "",
    isDone: false,
  });
  const createToDo = () => {
    setTasks((prev) => [...prev, { ...task, id: Date.now().toString() }]);
    setTask({ id: "", todo: "", isDone: false });
  };
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-16 text-slate-800">
      <div className="mx-auto w-full max-w-md">
        <h1 className="mb-6 text-3xl font-semibold tracking-tight text-slate-900">
          Things to do
        </h1>

        <div className="flex gap-2 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-indigo-500">
          <input
            type="text"
            placeholder="What needs doing?"
            className="min-w-0 flex-1 bg-transparent px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
            onChange={(e) =>
              setTask((currentTask) => ({
                ...currentTask,
                todo: e.target.value,
              }))
            }
          />
          <button
            onClick={createToDo}
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Add todo
          </button>
        </div>

        <div className="mt-6 space-y-2">
          {tasks.length === 0 && (
            <p className="rounded-2xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
              Nothing here yet. Add your first todo above.
            </p>
          )}
          {tasks.map((t) => {
            return (
              <div
                key={t.id}
                className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200"
              >
                <span className="break-words text-base text-slate-800">
                  {t.todo}
                </span>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 cursor-pointer rounded border-slate-300 accent-indigo-600"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
