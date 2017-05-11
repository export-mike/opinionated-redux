export default (nameSpace, constants) => {
	return constants.reduce((acc, constant) => ({
		...acc,
		[constant]: `${nameSpace}/${constant}`,
	}), {});
};
