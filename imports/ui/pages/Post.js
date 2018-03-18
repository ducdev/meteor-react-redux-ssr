import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'

import { fetchPostBySlug } from '../../actions/posts'

class Post extends Component {
  componentWillMount() {
    const { fetchPostBySlug } = this.props
    fetchPostBySlug(this.props.match.params.slug)
  }
  render() {
    const { loading, post } = this.props
    if (loading || !post)
      return <div>loading...</div>
    return (
      <div>
        <h3>{post.title}</h3>
        <img src={post.image} />
        <h5>{post.description}</h5>
        <p>Author: {post.author}</p>
        {
          post.authorData &&
          <img src={post.authorData.image} />
        }
        <p>Date: {moment(post.createdAt).format('LLL')}</p>
        <p>Voted: {post.votes}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { post, loading } = state.posts
  return {
    post,
    loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPostBySlug: bindActionCreators(fetchPostBySlug, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
