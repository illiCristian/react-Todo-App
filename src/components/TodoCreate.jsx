import React, { useState } from "react";

function TodoCreate({ createTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle("");
    }
    createTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 transition-all duration-500 dark:bg-slate-800">
      <span className="inline-block h-5 w-5 rounded-full border-2 transition-all duration-500"></span>
      <input
        className="h-full grow text-gray-500 outline-none dark:bg-slate-800 dark:text-gray-200"
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default TodoCreate;
