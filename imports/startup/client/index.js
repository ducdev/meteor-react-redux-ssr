import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Meteor } from 'meteor/meteor'
import App from '../../ui/layouts/App'
import mainReducer from '../../reducers'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(mainReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)))

Meteor.startup(() => hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <App />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-root')
));
