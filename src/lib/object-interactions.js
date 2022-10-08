const getIn = (object, path) => path.reduce((accumulator, key) => accumulator[key], object);

export {
	getIn
};
