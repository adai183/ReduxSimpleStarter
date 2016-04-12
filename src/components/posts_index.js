import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchLocations} from '../actions/index';
import { Link } from 'react-router';


 class PostsIndex extends Component {
   componentWillMount(){
     this.props.fetchLocations();
   }

   renderPosts(){
     return this.props.posts.map((post) => {
       return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <span className="pull-xs-right">{post.category}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
       )
     })
   }

   render() {
     return (
       <div>
          <div className="text-xs-right">
            <Link to="/posts/new" className="btn btn-primary">
              Add new post
            </Link>
          </div>
          <h3>Posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
       </div>
     );
   }
 }

function mapStateToProps(state) {
  return { posts: state.posts.all };
}
 export default connect(mapStateToProps, { fetchLocations })(PostsIndex);
