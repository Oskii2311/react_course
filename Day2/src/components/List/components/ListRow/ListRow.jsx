import React from "react";
import PropTypes from "prop-types";
import "./ListRow.css";
import { useHistory } from "react-router-dom";

const ListRow = ({ onLiClick, onRemoveClick, el }) => {
  const history = useHistory();

  const redirect = () => {
    history.push(`edit/${el.id}`);
  };
  return (
    <li onClick={() => onLiClick(el.id)} className="listElement">
      <div className={el.isChecked ? "listElementChecked " : ""}>{el.name}</div>
      <div className="buttonsContainer">
        <div
          className="removeButton"
          onClick={e => {
            e.stopPropagation();
            e.preventDefault();
            onRemoveClick(el.id);
          }}
        >
          remove
        </div>
        <div
          className="removeButton"
          onClick={e => {
            e.stopPropagation();
            e.preventDefault();
            redirect();
          }}
        >
          edit
        </div>
      </div>
    </li>
  );
};

ListRow.propTypes = {
  el: PropTypes.shape({
    isChecked: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.number
  }).isRequired,
  onLiClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

export default ListRow;
