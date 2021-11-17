const { CustomAPIError } = require("../errors/Custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ message: `Something went wrong please try again ` });
};

module.exports = errorHandlerMiddleware;
