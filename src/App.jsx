import { DragDropContext } from "@hello-pangea/dnd";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputado from "./components/TodoComputado";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

// const initialStateTodos = JSON.parse(localStorage.getItem("todos") || []);
const dataJson = JSON.parse(localStorage.getItem("todos"));
const initialStateTodos = dataJson
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
/* Reorder es para ordernar los drag and drop */
const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const createTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  const updateTodo = (id) => {
    setTodos(
      todos.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };
  const computedItemsLeft = todos.filter((el) => el.completed !== true).length;
  const clearCompleted = () => {
    setTodos(todos.filter((el) => !el.completed));
  };

  const [filter, setFilter] = useState("all");
  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
        break;
      case "completed":
        return todos.filter((el) => el.completed);
        break;
      case "active":
        return todos.filter((el) => !el.completed);
        break;
    }
  };

  const changeFilter = (filter) => setFilter(filter);

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };
  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <Header />
      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />
        {/* Drag and rop de las listas de tareas */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filterTodos()}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </DragDropContext>
        <TodoComputado
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />

        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>
      <footer className="mt-8 text-center transition-all duration-500 dark:text-gray-200">
        Drag and drop
      </footer>
    </div>
  );
}

export default App;
