import React from "react";

function TodoComputado({ computedItemsLeft, clearCompleted }) {
  return (
    <section className="flex justify-between rounded-b-md bg-white py-4 px-4 transition-all duration-500 dark:bg-slate-800">
      <span className="text-gray-400 dark:text-gray-200">
        {computedItemsLeft} Items left
      </span>
      <button className="text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </button>
    </section>
  );
}

export default TodoComputado;
