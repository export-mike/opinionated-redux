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

const getSideEffects = config => Object.keys(config).reduce((acc, k) => {
	if (!config[k].sideEffects) return acc;
	return {
		...acc,
		...config[k].sideEffects
	};
}, {});

export default config => {
	return {
		actions: getActions(config),
		reducers: getReducers(config),
		sideEffects: getSideEffects(config),
	}
};
