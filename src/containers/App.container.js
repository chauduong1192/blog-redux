import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import todoApp from '../reducers'

import PostsList from '../pages/PostList';


let store = createStore(
    todoApp,
    compose(applyMiddleware(
        promise,
    ))
);

const routes = [{
  key: 'posts',
  path: '/',
  exact: true,
  render: PostsList,
}];

const AppContainer = () => (
  <Provider store={store}>
    <Router>
      <div>
        { routes.map(route =>(
          <Route {...route} />
        ))}
      </div>
    </Router>
  </Provider>
)

export default AppContainer;