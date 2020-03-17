const jwt = require("jsonwebtoken");

// const jwtMiddleware = (req, res, next) => {
//   let token = req.headers["x-access-token"] || req.headers["authorization"];
//   let checkBearer = "Bearer ";

//   if (token) {
//     if (token.startsWith(checkBearer)) {
//       token = token.slice(checkBearer.length, token.length);
//     }
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         res.status(401).json({
//           success: false,
//           message: "Authentication failed"
//         });
//       } else {
//         req.decoded = decoded;
//         next();
//       }
//     });
//   } else {
//     res.status(401).json({
//       success: false,
//       message: "No token, authorization denied."
//     });
//   }
// };

const jwtMiddleware = (req, res, next) => {
  const token = req.header("x-auth-token"); //request token from header

  if (!token) {
    return res.status(401).json({ message: "no token, authorization denied" }); //if there is no token and the route is protected by the middleware then, the access is denied
  } else {
    try {
      //if there is a valid token, it will be decoded and passed to the user
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.decoded = decoded;

      next(); //move on
    } catch (err) {
      res.status(401).json({ msg: "token is not valid" }); //if the token is not valid then, it will throw an error
    }
  }
};
module.exports = jwtMiddleware;
