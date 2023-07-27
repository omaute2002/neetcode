// const JWT_SECRET = "secret";

// var jwt = require("jsonwebtoken");

// //This middle ware grabs the data from the request checks verify if yes then only run that particular function
// module.exports = {
//   // creating the middle ware that will check whether the user is authenticated or not
//   auth: (req, res, next) => {
//     // storing the header information in the follwoing variable

//     const authHeader = req.headers["authorization"];
//     if (!authHeader) {
//       res.status(403).json({ msg: "Missing auth header" });
//     }
//     const decoded = jwt.verify(authHeader, JWT_SECRET);
//     if (decoded && decoded.id) {
//       req.userId = decoded.id;
//       next();
//     } else {
//       return res.status(403).json({ msg: "Incorrect Token" });
//     }
//   },
// };

// =================================================================
// harkirat Code
const JWT_SECRET = "secret";
var jwt = require("jsonwebtoken");

module.exports = {
  auth: (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(403).json({ msg: "Missing auth header" });
    }
    const decoded = jwt.verify(authHeader, JWT_SECRET);
    if (decoded && decoded.id) {
      req.userId = decoded.id;
      next();
    } else {
      return res.status(403).json({ msg: "Incorrect token" });
    }
  },
};
