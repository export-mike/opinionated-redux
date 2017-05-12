import * as user from './user';
import { setup } from '../lib/opinionated-redux';
import Api from '../../Api';

module.exports = setup(
	{
		user
	}, {
	sideEffects: {
		[user.constants.FETCH_USER_AND_POSTS]: async ({ state, payload: { id }, dispatch }) => {
			const user = await Api.fetchUser(id);
			const posts = await Api.fetchPostsForUserId(id);

			dispatch(user.creators.fetchUserSuccess(user));
			dispatch(posts.creators.fetchPostsSuccess(posts));
		},
	}
});

// test.js
// import { sideEffects, user } from './state';
//
// test('', () => {
// 	const effect = sideEffects[user.constants.FETCH_USER_AND_POSTS];
// 	const store = mockStore();
//
// 	// nock();
//
// 	effect({ state: { }, payload: { id: 1 }, dispatch: store.dispatch });
//
// 	expect(store.getActions(), [
// 		{type: ''},
// 		{type: ''}
// 	]);
//
// });
