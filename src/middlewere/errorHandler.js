const ENRIVONMENT = process.env.NODE_ENV;

const errorHandler = (err, req, res, next) => {
	let error = String(err).split(":")[1].trim();
	console.log(err);

	if (ENRIVONMENT && ENRIVONMENT === "development") {
		const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
		res.status(statusCode).send({
			success: false,
			error,
		});
	} else {
		const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
		const productionError =
			res.statusCode === 200 ? "Internal Server error" : error;
		res.status(200).send({
			success: false,
			error: productionError,
		});
	}
};

module.exports = { errorHandler };
