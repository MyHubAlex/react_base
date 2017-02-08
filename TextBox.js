const DOM = React.DOM;

class TextBox extends React.Component {
              
  render(){
    return React.createElement('span',{}, this.props.text);
  }
};

ReactDOM.render(
  React.createElement(TextBox, { text: "абракадабра"}),
  document.getElementById('app')
);