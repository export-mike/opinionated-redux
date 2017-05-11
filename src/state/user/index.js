import { createReducer, createConstants } from '../../lib/opinionated-redux';

export const constants = createConstants('user', [
	'FETCH_USER',
	'FETCH_USER_SUCCESS',
	'FETCH_USER_FAIL'
]);

export const creators = {
	fetchUser: id => ({
		type: constants.FETCH_USER,
		payload: { id }
	}),
	fetchUserSuccess: user => ({
		type: constants.FETCH_USER_SUCCESS,
		payload: { user }
	}),
	fetchUserFail: error => ({
		type: constants.FETCH_USER_FAIL,
		payload: { error }
	})
};

export const sideEffects = ({
	[constants.FETCH_USER]: async ({ state, payload: { id }, dispatch }) => {
		setTimeout(
			() => dispatch(creators.fetchUserSuccess({ name: 'mike' }))
		, 1000)
	},
});

export default createReducer({
	name: null,
	isLoading: false,
	errorLoading: null,
}, {
	[constants.FETCH_USER]: (state) => ({
		isLoading: true,
	}),
	[constants.FETCH_USER_SUCCESS]: (state, payload) => ({
		...state,
		name: payload.user.name,
		isLoading: false,
	}),
	[constants.FETCH_USER_FAIL]: (state, payload) => ({
		...state,
		isLoading: false,
		errorLoading: payload.error
	})
});
