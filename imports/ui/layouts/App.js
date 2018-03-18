import React, { PropTypes } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Link } from 'react-router-dom'

import Index from '../pages/Index'
import Posts from '../pages/Posts'
import Post from '../pages/Post'
import configureStore from '../../store/configure-store'

const store = configureStore()

const App = () => (
  <div className="App">
    <h1><Link to='/'>Meteor + React + Redux + SSR</Link></h1>
    <Switch>
      <Route exact name="index" path="/" component={() => <Redirect to="/posts"/>} />
      <Route exact name="posts" path="/posts" component={Posts} />
      <Route exact name="post" path="/post/:slug" component={Post} />
    </Switch>
  </div>
)

export default App
