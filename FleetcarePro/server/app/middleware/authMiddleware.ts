const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check if token exist
  if (token) {
    jwt.verify(token);
  } else {
    res.redirect("/login");
  }
};
