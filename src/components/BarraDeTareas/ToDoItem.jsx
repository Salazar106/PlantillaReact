import React from 'react';

export function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
      <i className="fa-regular fa-circle-check"></i>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
      <i className="fa-regular fa-circle-xmark"></i>
      </span>
    </li>
  );
}