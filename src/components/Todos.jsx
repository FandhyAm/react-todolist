import React from "react";
import Todo from "./Todo";
import propTypes from "prop-types";

const Todos = ({ todos } ) => {
 
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

Todos.propTypes =  {
  todos: propTypes.arrayOf(propTypes.shape({
    text: propTypes.string
  })
  )
};

export default Todos;
