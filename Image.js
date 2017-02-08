const DOM = React.DOM;

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

ReactDOM.render(
   React.createElement(Image, { src: "http://www.wallpapercase.com/wp-content/uploads/2016/06/Pure-Lake-and-Leeds-Castle-HD-Wallpaper-2560x1440-1024x576.jpg",
            width: '100px', height: '100px', alt: 'тест' }),
   document.getElementById('app')
);