import React from "react";

export function ToDoList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}
