import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { fetchPosts } from '../../actions/posts'

const Posts = ({ loading, fetchPosts, postsList }) => {
  if (loading || !postsList || postsList.length === 0) {
    fetchPosts()
    console.log('fetchPosts()')
    return <div>loading...</div>
  }
  return (
    <div>
      {
        postsList &&
        postsList.length > 0 &&
        <ul>
          {
            postsList.map(post => <li key={post.title}>
              <h3><Link to={`/post/${post.slug}`}>{post.title}</Link> - <i>by {post.author} ({post.votes} vote{ post.votes !== 1 ? 's' : ''})</i></h3>
              <h5>{post.description}</h5>
            </li>)
          }
        </ul>
      }
    </div>
  )
}

function mapStateToProps(state) {
  const { postsList, loading } = state.posts
  return {
    postsList,
    loading
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPosts: bindActionCreators(fetchPosts, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
