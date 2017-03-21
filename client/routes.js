// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import Css
// import css from './styles/style.styl';

import Main from './components/Main'
import Home from './components/Home.jsx'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// Import react react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
      <Router history={history}>
         <Route path="/" component={Main}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
         </Route>
      </Router>
   </Provider>
)


render(router, document.getElementById('root'));
