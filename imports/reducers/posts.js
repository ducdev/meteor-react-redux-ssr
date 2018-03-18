import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR } from '../actions/posts'

const initialState = {
  postsList: [],
  post: {},
  loading: false,
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: true
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        postsList: action.posts
      }
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case FETCH_POST:
      return {
        ...state,
        loading: true
      }
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.post
      }
    case FETCH_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
  }
  return state
}
