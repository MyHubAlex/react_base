import React from 'react';
const DOM = React.DOM;
const { PropTypes } = React;

const TextBox = ({ text, children }) => (
  DOM.span(null, text, children)
);

TextBox.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string
};
export default TextBox;
