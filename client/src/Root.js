import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux'
import App from './App'
import NotFound from './components/NotFound';
import Login from './containers/Login'
import Signup from './containers/Signup'
import Profile from './containers/Profile'

const history = createBrowserHistory();

const Root = ({ store }) =>
<Provider store={store}>
  <Router history={history}>
    <Switch history={history}>
      <Route exact path="/" component={App} />
      <Route exact path="/login" history={history} component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} history={history}/>
      <Route component={NotFound} />
    </Switch>
  </Router>
</Provider>

export default Root;
