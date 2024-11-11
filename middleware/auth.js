function auth(req, res, next) {
  if (req.query.admin === "true") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = auth;