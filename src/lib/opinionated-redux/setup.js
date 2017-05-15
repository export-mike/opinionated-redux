const getActions = config => Object.keys(config).reduce((acc, k) => {
		if (!config[k].creators) return acc;

		return {
			...acc,
			[k]: config[k].creators
		}
}, {});

const getReducers = config => Object.keys(config).reduce((acc, k) => {
	if (!config[k].default) return acc;
	return {
		...acc,
		[k]: config[k].default
	};
}, {});

const getSideEffects = (scopes, shared) => {

	// 1. scope.sideEffect.getItem
	// 2. shared.sideEffect.getItem
	// if (shared.sideEffect.has('getItem')) {
	//   return getItem: [shared.sideEffect.getItem, scope.sideEffect.getItem]
  // }

	const sideEffects = Object.keys(scopes).reduce((acc, k) => {
		if (!scopes[k].sideEffects) return acc;
		return {
			...acc,
			...scopes[k].sideEffects
		};
	}, {});
	console.log('before merge', sideEffects);
	const merged = Object.keys(sideEffects)
	.reduce((acc, key) => {
		if (shared[key]) {
			return {
				...acc,
				[key]: [
					shared[key],
					sideEffects[key],
				]
			};
		}
		return {
			...acc,
			[key]: sideEffects[key]
		};
	}, {});
	console.log('merged', merged);
	return merged;
}
export default (scopes, shared = { sideEffects: {} }) => {
	return {
		actions: getActions(scopes),
		reducers: getReducers(scopes),
		sideEffects: getSideEffects(scopes, shared.sideEffects),
	}
};
