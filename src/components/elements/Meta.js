import React from 'react';
import TextBox from './Text';
const DOM = React.DOM;
const { PropTypes } = React;

const Meta = ({ meta }) => (
  DOM.div({},
    meta.author && React.createElement(TextBox, {}, `Автор:  ${meta.author}`),
    meta.created_at && React.createElement(TextBox,
       {},
        `Создано:  ${meta.created_at}`),
    meta.updated_at && React.createElement(TextBox,
       {},
       `Отредактировано:  ${meta.updated_at}`)
  )
);


// class Meta extends React.Component {
//   render() {
//     const { meta } = this.props.item;
//     return React.DOM.div({},
//       meta.author && React.createElement(TextBox, {}, `Автор:  ${meta.author}`),
//       meta.created_at && React.createElement(TextBox,
//          {},
//           `Создано:  ${meta.created_at}`),
//       meta.updated_at && React.createElement(TextBox,
//          {},
//          `Отредактировано:  ${meta.updated_at}`)
//     );
//   }
// }

Meta.propTypes = {
  meta: PropTypes.object
};

Meta.defaultProps = {
  meta: { author: 'noname' }
};

export default Meta;
