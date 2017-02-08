import React from 'react';
import  _ from 'lodash';
import BlogItem from './widgets/blog/Item';

class BlogList extends React.Component {
  constructor(props){
    super(props);

    this.state = { list : this.props.listItem };
    //this.incrementLike = _.bind(this.incrementLike, this);
  }

  render(){
    //const listItem  = this.state.list;
    return React.createElement(
      'ul',
      {},
      _.map(
       this.state.list,
        (item) => (
          React.createElement('li',{ key: item.id },
            React.createElement(BlogItem,
              {item, incrementLike: () => this.props.incrementLike(item.id) })
          )
        )
      )
    );
  }
}

export default BlogList;
