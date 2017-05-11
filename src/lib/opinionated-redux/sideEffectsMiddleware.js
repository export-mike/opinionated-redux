export default sideEffects => store => next => action => {
	const effect = sideEffects[action.type];
	next(action);
	if (effect) {
		effect({ state: store.getState(), payload: action.payload, dispatch: store.dispatch });
	}
};
