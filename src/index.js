import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './containers/Home';
import Questions from './containers/Questions';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/questions/:qID' component={Questions}/>
            </Switch>
        </Router>
    </Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
