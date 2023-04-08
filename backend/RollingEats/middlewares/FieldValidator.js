const { validationResult } = require("express-validator");

const validateFields = (req, res, next) => {
  const e = validationResult(req);
  if (!e.isEmpty()) {
    return res.status(400).json(e);
  }

  next();
};

module.exports = {
    validateFields,
};