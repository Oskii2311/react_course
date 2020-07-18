import React from "react";
import "./List.css";
import ListRow from "./components/ListRow/ListRow";

const List = props => {
  return (
    <div className="listComponent">
      <ul className="list">
        {props.tasks.map(el => {
          return (
            <ListRow
              key={el.id}
              el={el}
              onLiClick={props.onLiClick}
              onRemoveClick={props.onRemoveClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
