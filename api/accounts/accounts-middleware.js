exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  next();
  console.log("checkAccountPayload middleware");
};

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  next();
  console.log("checkAccountNameUnique middleware");
};

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  next();
  console.log("checkAccountId middleware");
};
