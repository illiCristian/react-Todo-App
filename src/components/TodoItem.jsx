import React from "react";
import CrossIcon from "./icons/CrossIcon";
import IconCheck from "./icons/IconCheck";

/* Uso el fowardRef para pasar la la referencia a traves de un componente  */
const TodoItem = React.forwardRef(
  ({ id, title, completed, removeTodo, updateTodo, ...props }, ref) => {
    return (
      <div key={id}>
        <article
          {...props}
          /* este ref permite que el componente principal pueda acceder al compente anidado */
          ref={ref}
          className="flex gap-4 border-b border-b-gray-400 py-4 px-4 ">
          <button
            className={` h-5 w-5 flex-none rounded-full border-2
            ${
              completed
                ? "flex  items-center justify-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                : "inline-block   "
            }`}
            onClick={() => updateTodo(id)}>
            {completed && <IconCheck />}
          </button>
          <p
            className={`flex-grow text-gray-600 dark:text-gray-300 ${
              completed && "line-through"
            }`}>
            {title}
          </p>
          <button onClick={() => removeTodo(id)}>
            <CrossIcon />
          </button>
        </article>
      </div>
    );
  }
);

export default TodoItem;
