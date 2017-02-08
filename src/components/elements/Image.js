import React from 'react';
const { PropTypes } = React;
const  DOM = React.DOM;

const Image = ({ src, alt, width, height })  => (
    DOM.img({
      src: src,
      alt: alt,
      style:{
        width: width,
        height: height,
      }
    })
);

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  src:  '',
  width: '100px',
  height: '200px',
  alt: 'noname'
};

export default Image;
