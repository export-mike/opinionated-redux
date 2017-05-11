import createStore from '../lib/opinionated-redux';

import userReducer, * as user from './user';

export const actions = {
	user: user.creators,
};

const reducers = {
	user: userReducer
};

const sideEffects = {
	...user.sideEffects,
};

export default initialState => createStore({
		reducers,
		sideEffects,
		initialState,
});

export { connect, Provider } from '../lib/opinionated-redux';
