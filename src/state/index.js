import * as user from './user';
import { setup } from '../lib/opinionated-redux';

module.exports = setup({
		user
	}, {
	sideEffects: {
		[user.constants.FETCH_USER]: async ({ state, payload: { id }, dispatch }) => {
			// do something else
			const response = await fetch('http://google.com')
			console.log(response);
		},
	}
});
/*
 * How can we test this?
*/

// test.js
// import { sideEffects, user } from './state';
//
// test('', () => {
// 	const effect = sideEffects[user.constants.FETCH_USER_AND_POSTS];
// 	const store = mockStore();
//
// 	// nock(); // nock setup
//
// 	effect({ state: { }, payload: { id: 1 }, dispatch: store.dispatch });
//
// 	expect(store.getActions(), [
// 		{type: ''},
// 		{type: ''}
// 	]);
//
// });
