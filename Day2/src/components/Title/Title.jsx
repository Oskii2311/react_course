import React from "react";
import PropTypes from "prop-types";

const Title = props => <div className="title">{props.text}</div>;

Title.propTypes = {
  text: PropTypes.string
};

Title.defaultProps = {
  text: "moja todo lista"
};

export default Title;
