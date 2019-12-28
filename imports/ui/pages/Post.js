import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { bindActionCreators } from 'redux'

import { fetchPostBySlug } from '../../actions/posts'

const Post = ({ loading, post, match, fetchPostBySlug }) => {
  useEffect(() => {
    if (loading || !post || match.params.slug !== post.slug) {
      console.log('called POST')
      fetchPostBySlug(match.params.slug)
    }
  })
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

const mapStateToProps = (state) => {
  const { post, loading } = state.posts
  return {
    post,
    loading
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPostBySlug: bindActionCreators(fetchPostBySlug, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
