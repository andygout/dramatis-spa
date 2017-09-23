export default (req, res, data) => {

	res.setHeader('Content-Type', 'application/json');

	return res.send(JSON.stringify(data));

};
