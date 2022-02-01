const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkBoolean = (req, res, next) => {
  const { isFavorite } = req.body;
  if (
    isFavorite == "true" ||
    isFavorite == "false" ||
    isFavorite == undefined
  ) {
    next();
  } else {
    res.status(400).json({ error: "isFavorite must be a boolean value" });
  }
};

module.exports = {
    checkName,
    checkBoolean
}
