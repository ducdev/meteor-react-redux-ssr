import React from 'react'
import { renderToString } from 'react-dom/server'
import { Meteor } from 'meteor/meteor'
import { onPageLoad } from 'meteor/server-render'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Helmet } from 'react-helmet'
import App from '../imports/ui/layouts/App'
import mainReducer from '../imports/reducers'

onPageLoad((sink) => {
  const isPost = sink.request.url.pathname.includes('/post/')
  const postSlug = isPost ? sink.request.url.pathname.replace('/post/', '') : ''

  const context = {}
  const data = {
    posts: {
      loading: false,
      postsList: sink.request.url.pathname.includes('/posts') ? Meteor.call('fetchPosts') : [],
      post: isPost ? Meteor.call('fetchPostBySlug', postSlug) : null
    }
  }

  const store = createStore(mainReducer, data, applyMiddleware(thunk))
  const initialData = store.getState()

  sink.renderIntoElementById('react-root', renderToString(
    <Provider store={store}>
      <StaticRouter location={sink.request.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  ))

  const helmet = Helmet.renderStatic()
  sink.appendToHead(helmet.meta.toString())
  sink.appendToHead(helmet.title.toString())

  sink.appendToBody(`
    <script id="preloaded-state">
      window.__PRELOADED_STATE__ = ${JSON.stringify(initialData).replace(/</g, '\\u003c')}
    </script>
  `)
})
