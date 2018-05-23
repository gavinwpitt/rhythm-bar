import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import ReactDom from 'react-dom';
import Home from './Components/Home/Home';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import reducers from './reducers'

const store = createStore(combineReducers({...reducers}), compose(
		applyMiddleware(thunk)
	));

render(
	<Provider store={store}>
        <Home />
	</Provider>,
	document.getElementById('root')
)