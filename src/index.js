import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

import reducer from './reducers';
import App from './components/App';
import ShowDetails from './components/ShowDetails';

const store = createStore(
    reducer,
    applyMiddleware(thunk));

ReactDOM.render(
<Provider store = {store}>     
<Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/details/:id" component={ShowDetails} />
      </div>
  </Router>  
</Provider>, document.getElementById('root')
);