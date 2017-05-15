export default (sideEffects, sharedSideEffects) => store => next => action => {
	const effect = sideEffects[action.type];

	if (Array.isArray(effect)) {
		effect.forEach(sideEffect => {
			sideEffect({ state: store.getState(), payload: action.payload, dispatch: store.dispatch })
		});
	} else if (effect) {
		effect({ state: store.getState(), payload: action.payload, dispatch: store.dispatch });
	}

	next(action);
};
