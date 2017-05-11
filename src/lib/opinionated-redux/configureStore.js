import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import sideEffectsMiddleware from './sideEffectsMiddleware';
const devTools = () =>
	typeof window !== 'undefined'
	&& window.devToolsExtension
	&& process.env.NODE_ENV !== 'production'
	? window.devToolsExtension()
	: f => f;

const createStoreWithMiddleware = sideEffects => compose(
		applyMiddleware(sideEffectsMiddleware(sideEffects)),
		devTools()
)(createStore);

const configureStore = ({ reducers, sideEffects, initialState }) => {
	return createStoreWithMiddleware(sideEffects)(combineReducers(reducers), initialState);
}


export default configureStore;
