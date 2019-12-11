import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux'
import App from './App'
import NotFound from './components/NotFound';
import Login from './containers/Login'

const history = createBrowserHistory();

const Root = ({ store }) =>
<Provider store={store}>
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
</Provider>

export default Root;
