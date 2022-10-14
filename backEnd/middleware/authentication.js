const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.SECRET_KEY;

const fetchuser = (req, res, next) => {
  //taking the id from token and adding it to the req object
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      status: "failed",
      message: "User Not valid",
    });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    // if verified typed email will become user email
    // console.log("auth", data);
    if (data) {
      req.user = data.user;
      next();
    }
  } catch (error) {
    res.status(403).json({
      status: "failed",
      message: "Un-authorized",
    });
  }
};

module.exports = fetchuser;
