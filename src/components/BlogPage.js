import React from 'react';
import _ from 'lodash';
import { items } from '../constants/static/items';
import request from 'superagent';
import BlogList from './List';

class BlogPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = { list: [] };
    this.incrementLike = _.bind(this.incrementLike, this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001/',
      {},
      (err, res) => this.setState({ list: res.body }));
  }

  incrementLike(id) {
     var newlist =  this.state.list.map(function(item) {
         if (item.id == id ) {
           item.meta.likes += 1;
         }
       return item;
     });
    this.setState({ list: newlist });
  }


  render(){
    //const listItem= this.state.listItem;
    return React.createElement('div',
    {},
    React.createElement(BlogList,
       { listItem: this.state.list, incrementLike: this.incrementLike })
     );
  }
}

export default BlogPage;
