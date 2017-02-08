import React from 'react';
import _ from 'lodash';
import Link from 'components/elements/Link';
import { postPath } from 'helpers/routes';
import TextBox from 'components/elements/Text';
import Image from 'components/elements/Image';
import Meta from 'components/elements/Meta';
import Like from 'components/elements/Like';

const BlogItem = ({item, incrementLike }) => {

  return React.createElement(
         'div',
         {},
         React.createElement(Link,
           { to: postPath(item.id)},
            React.createElement(TextBox,
               { text: item.meta.stitle})),
         React.createElement(Image, item.image),
         React.createElement(TextBox,  { text: item.text }),
         React.createElement(Meta,  { meta: item.meta}),
         //React.createElement(Meta,  { meta: item.meta}));
         React.createElement(Like, { item , incrementLike }));

};

export default BlogItem;
