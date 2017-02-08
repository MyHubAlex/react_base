import React from 'react';
import TextBox from './Text';
const DOM = React.DOM;

const Like = ( props ) => (

       DOM.div({},
         React.createElement('button',{ onClick: props.incrementLike }, 'Like'),
         React.createElement(TextBox,
           {},
            `Количество лайков ${props.item.meta.likes}`)
        )
);

export default Like;
