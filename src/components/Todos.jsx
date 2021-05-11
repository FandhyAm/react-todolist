import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar props di react!"
    },
    {
      text: "Belajar react Hooks!"
    },
    {
      text: "Belajar State di react!"
    },
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar React!"
    },

    {
      text: "Belajar React!"
    },
    {
      text: "Belajar props di react!"
    },
    {
      text: "Belajar react Hooks!"
    },
    {
      text: "Belajar State di react!"
    },
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
