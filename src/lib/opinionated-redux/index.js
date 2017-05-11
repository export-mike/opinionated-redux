import configureStore from './configureStore';
import createReducer from './createReducer';
import createConstants from './createConstants';
import buildConfig from './buildConfig';
export { createReducer, createConstants, buildConfig };

export default (config, initialState) => {
	return configureStore({...config, initialState})
};

export { Provider, connect } from 'react-redux';
export { compose, combineReducers } from 'redux';


// export const actions = {
// 	user: user.creators,
// };
//
// const reducers = {
// 	user: userReducer
// };
//
// const sideEffects = {
// 	...user.sideEffects,
// };
//
// export default initialState => createStore({
// 		reducers,
// 		sideEffects,
// 		initialState,
// });
//
