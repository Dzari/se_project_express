const errorHandling = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? "An error occured on the server" : message,
  });
};

module.exports = { errorHandling };
