import { Meteor } from 'meteor/meteor'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
export const FETCH_POST = 'FETCH_POST'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR'

export function fetchPosts() {
  return dispatch => {
    dispatch({ type: FETCH_POSTS })
    Meteor.call('fetchPosts', (err, res) => {
      if (err) {
        dispatch({ type: FETCH_POSTS_ERROR })
      } else {
        dispatch({ type: FETCH_POSTS_SUCCESS, posts: res })
      }
    })
  }
}

export function fetchPostBySlug(slug) {
  return dispatch => {
    dispatch({ type: FETCH_POST })
    Meteor.call('fetchPostBySlug', slug, (err, res) => {
      if (err) {
        dispatch({ type: FETCH_POST_ERROR })
      } else {
        dispatch({ type: FETCH_POST_SUCCESS, post: res })
      }
    })
  }
}
