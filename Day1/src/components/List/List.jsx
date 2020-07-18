import React from "react";
import "./List.css";

const List = props => (
  <div className="listComponent">
    <ul className="list">
      {props.tasks.map((el, idx) => (
        <li
          onClick={() => props.onLiClick(el.name)}
          className={
            el.isChecked === true
              ? "listElementChecked listElement"
              : "listElement"
          }
          key={idx}
        >
          {el.name}
        </li>
      ))}
    </ul>
  </div>
);

export default List;
