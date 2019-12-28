import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Posts from '../pages/Posts'
import Post from '../pages/Post'

const App = () => (
  <div className="App">
    <h1><Link to='/'>Meteor + React + Redux + SSR 2020</Link></h1>
    <Switch>
      <Route exact path="/">
        <Redirect to="/posts"/>
      </Route>
      <Route exact name="posts" path="/posts" component={Posts} />
      <Route exact name="post" path="/post/:slug" component={Post} />
    </Switch>
  </div>
)

export default App
