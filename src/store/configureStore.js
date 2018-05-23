import { createStore, applyMiddleware, combineReducers } from 'redux'
import reducers from '../reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux'
export default function configureStore(){

	let store = createStore(
		combineReducers({ ...reducers, router: routerReducer }),
	)
	return {
		store: store
	}

}
