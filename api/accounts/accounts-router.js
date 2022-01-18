const router = require("express").Router();
const md = require("./accounts-middleware");

router.get("/", (req, res, next) => {
  // DO YOUR MAGIC
  try {
    console.log("get accounts");
    res.json([{}, {}]);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  (req, res, next) => {
    // DO YOUR MAGIC
    try {
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:id",
  md.checkAccountId,
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  (req, res, next) => {
    // DO YOUR MAGIC
  }
);

router.delete("/:id", md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
