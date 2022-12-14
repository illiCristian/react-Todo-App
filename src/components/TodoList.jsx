import { Draggable, Droppable } from "@hello-pangea/dnd";
import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, updateTodo }) {
  return (
    <Droppable droppableId="todos">
      {(droppableProvided) => (
        <div
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-500 dark:bg-gray-800">
          {todos.map((el, index) => (
            <Draggable key={el.id} index={index} draggableId={`${el.id}`}>
              {(draggableProvided) => (
                <TodoItem
                  ref={draggableProvided.innerRef}
                  id={el.id}
                  title={el.title}
                  completed={el.completed}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  {...draggableProvided.dragHandleProps}
                  {...draggableProvided.draggableProps}
                />
              )}
            </Draggable>
          ))}
          {droppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TodoList;
