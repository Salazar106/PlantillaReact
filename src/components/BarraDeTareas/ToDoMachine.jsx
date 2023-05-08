import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoList } from "./ToDoList";
import { TodoItem } from "./ToDoItem";
import { TodoSearch } from "./ToDoShearch";
import { BotonTareas } from "../Estilos/Botones";
import "./ToDostyles.css";
import tarea from '../../assets/tareas.png'

function ToDoMachine() {
  const tareas = [
    { textico: "Primera tarea", Complete: false },
    { textico: "segunda tarea", Complete: false },
    { textico: "tercera tarea", Complete: false },
    { textico: "tercera tarea", Complete: false },
    { textico: "tercera tarea", Complete: false },

   
  ];
  return (
    <React.Fragment>
      <ToDoCounter />
      <div className="contenedor">
        <div className="card">
          <BotonTareas /><br/>
          <img src={tarea} alt="" className="img"/>
        </div>
        <div className="card2">
        <TodoSearch />
          <ToDoList>
            {tareas.map((tarea) => (
              <TodoItem key={tarea.textico} text={tarea.textico} />
            ))}
          </ToDoList>
        </div>
      </div>
    </React.Fragment>
  );
}
export default ToDoMachine;
