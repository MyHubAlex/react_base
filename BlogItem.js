const { DOM, PropTypes } = React;


class TextBox extends React.Component {
              
  render(){
    return React.createElement('span',{}, this.props.text, this.props.children);
  }
};

TextBox.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string
};

const Image = ( props ) => (
    DOM.img({
        src: props.src,
        alt: props.alt,
        style:{
          width: props.width,
          height: props.height,
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
  src:  "http://www.wallpapercase.com/wp-content/uploads/2016/06/Pure-Lake-and-Leeds-Castle-HD-Wallpaper-2560x1440-1024x576.jpg",
  width: '100px',
  height: '200px',
  alt: 'noname'
};

class BlogItem extends React.Component {  
  render(){
     const { image, text } = this.props;
    
     return React.createElement(
       'div',
       {},
       React.createElement(Image, image),
       React.createElement(TextBox,  { text } ),
       React.createElement(Meta, _.assign({}, this.props)),
       React.createElement(Like, _.assign({}, this.props)),
     ) 
  }
};



class Meta extends React.Component {
  render() {
    const { meta } = this.props;
    return DOM.div({},
                   meta.author && React.createElement(TextBox, {}, `Автор:  ${meta.author}`),                   
                   meta.created_at && React.createElement(TextBox, {}, `Создано:  ${meta.created_at}`),
                   meta.updated_at && React.createElement(TextBox, {}, `Отредактировано:  ${meta.updated_at}`)
    )
  }
};

Meta.propTypes = {
  meta: PropTypes.object  
};

Meta.defaultProps = {
  meta: { author: "noname" }  
};

class Like extends React.Component {
    constructor(props){
      super(props);
      
      this.state = { like:  props.meta.likes  };
      this.handleClick = _.bind(this.handleClick, this);
    }
  
    handleClick(e){
      this.setState({ like: this.state.like + 1});
    }
  
    render(){
      const like = this.state.like;
      return DOM.div({},
                     React.createElement('button',{ onClick: this.handleClick }, 'Like'),
                     React.createElement(TextBox,{}, `Количество лайков ${like}`)                                         
        )
    }
};


ReactDOM.render(
  React.createElement(BlogItem, { image: {
                                 src: "http://www.wallpapercase.com/wp-content/uploads/2016/06/Pure-Lake-and-Leeds-Castle-HD-Wallpaper-2560x1440-1024x576.jpg",
                                 width: '100px', 
                                 height: '100px', 
                                 alt: 'тест'
                                }, text: 'test',
                             
                                meta: {
                                 
                                  created_at: 46,
                                  updated_at: '10 ноября',
                                  likes: 10
                                }}),
  document.getElementById('app')
);




