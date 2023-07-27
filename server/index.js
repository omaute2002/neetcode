// const express = require("express");
// const app = express();
// const port = 4000;
// var jwt = require("jsonwebtoken");
// const { auth } = require("./middleware.js");
// let USER_ID_COUNTER = 1;
// const USER = [];
// const JWT_SECRET = "secret";
// const bodyParser = require("body-parser");
// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// const cors = require("cors");
// app.use(cors());
// app.use(jsonParser);

// const PROBLEMS = [
//   {
//     problemId: "1",
//     title: "201. BitWise AND of Numbers Range",
//     difficulty: "Medium",
//     acceptance: "42%",
//     description: "Given two integres left and right that represents",
//     exampleIn: "left =5 right=7",
//     exampleout: "4",
//   },
//   {
//     problemId: "2",
//     title: "5. Longest Palindromic Substring",
//     difficulty: "Medium",
//     acceptance: "32%",
//     description:
//       "Given a string s, return the longest, palindromic Substring in s",
//     exampleIn: 's = "babad"',
//     exampleout: "bab",
//   },
//   {
//     problemId: "3",
//     title: "11. Container With Most Water",
//     difficulty: "Medium",
//     acceptance: "54%",
//     description:
//       "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
//     exampleIn: "height = [1,1]",
//     exampleout: "1",
//   },
//   {
//     problemId: "4",
//     title: "4. Median of Two Sorted Arrays",
//     difficulty: "Hard",
//     acceptance: "32%",
//     description:
//       "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
//     exampleIn: "ums1 = [1,3], nums2 = [2]",
//     exampleout: "2.0000",
//   },
// ];

// const SUBMISSIONS = [];

// app.get("/", (req, res) => {
//   res.json({
//     msg: "Hello world",
//   });
// });

// // the problems route
// app.get("/problems", (req, res) => {
//   const filterProblems = PROBLEMS.map((x) => ({
//     title: x.title,
//     problemId: x.problemId,
//     difficulty: x.difficulty,
//     acceptance: x.acceptance,
//   }));
//   res.json({
//     problems: filterProblems,
//   });
// });

// app.get("/problem/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);

//   //store the complete detail of the problem in this variable
//   const problem = PROBLEMS.find((x) => x.problemId === id);

//   if (!problem) {
//     return res.status(411).json({});
//   }
//   // returning in the format of json
//   res.json({
//     problem,
//   });
// });

// // Submission Route
// app.get("/submission/:projectId", auth, (req, res) => {
//   const problemId = req.params.projectId;
//   const submissions = SUBMISSIONS.filter(
//     (x) => x.problemId === problemId && x.userId === req.userId
//   );
//   res.json({ submissions });
// });

// // now /me page that gives the information about the user
// app.get("/me", (req, res) => {
//   const user = USER.find((x) => x.id === req.userID);
//   res.json({ user });
// });

// // Submissions Post Request
// app.post("/submissions", auth, (req, res) => {
//   const isCorrect = Math.random() < 0.5;
//   const problemId = req.body.problemId;
//   const submissions = req.body.submissions;
//   if (isCorrect) {
//     SUBMISSIONS.push({
//       submissions,
//       problemId,
//       userId: req.userId,
//       status: "AC",
//     });
//     return res.json({ status: "AC" });
//   } else {
//     SUBMISSIONS.push({
//       submissions,
//       problemId,
//       userId: req.userId,
//       status: "WA",
//     });
//     return res.json({ status: "WA" });
//   }
// });

// // SignUp endpoint Logic
// app.post("/signup", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   if (USER.find((x) => x.email === email)) {
//     res.status(403).json({ msg: "user already exist" });
//   } else {
//     USER.push({
//       email,
//       password,
//       id: USER_ID_COUNTER++,
//     });
//   }

//   res.json({ msg: "Signup Successfull" });
// });

// // Login Logic
// app.post("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   // this will store all the info about the user in the user variable
//   const user = USER.find((x) => x.email === email);

//   if (!user) {
//     return res.status(403).json({ msg: "user  not exist" });
//   }
//   if (user.password !== password) {
//     return res.status(403).json({ msg: "Incorrect password" });
//   }

//   // create token and store data in them in secure pattenr
//   /// only backend know the token
//   // this will only decoded by the backend and who knows the JWT_SECRET
//   const token = jwt.sign(
//     {
//       id: user.id,
//     },
//     JWT_SECRET
//   );

//   return res.json({ token, msg: "successfully" });
// });

// console.log(USER);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// =================================================================
//Harkirat Code
const express = require("express");
const app = express();
const port = 4000;
var jwt = require("jsonwebtoken");
const { auth } = require("./middleware");
let USER_ID_COUNTER = 1;
const USERS = [];
const JWT_SECRET = "secret";
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const cors = require("cors");
app.use(cors());
app.use(jsonParser);

const PROBLEMS = [
  {
    problemId: "1",
    title: "401. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    description:
      "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    exampleIn: "left = 5, right = 7",
    exampleOut: "4",
  },
  {
    problemId: "2",
    title: "205. Add two numbers",
    difficulty: "Medium",
    acceptance: "41%",
    description:
      "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
    exampleIn: "a = 100 , b = 200",
    exampleOut: "300",
  },
  {
    problemId: "3",
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
    description: "Write an algorithm to determine if a number n is happy.",
    exampleIn: "n = 19",
    exampleOut: "true",
  },
  {
    problemId: "4",
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
    description: "Given number k , removed kth element",
    exampleIn: "list: 1->2->3 , k=2",
    exampleOut: "1->3",
  },
  {
    problemId: "5",
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    description:
      "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    exampleIn: "left = 5, right = 7",
    exampleOut: "4",
  },
  {
    problemId: "6",
    title: "205. Add two numbers",
    difficulty: "Medium",
    acceptance: "41%",
    description:
      "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
    exampleIn: "a = 100 , b = 200",
    exampleOut: "300",
  },
  {
    problemId: "7",
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
    description: "Write an algorithm to determine if a number n is happy.",
    exampleIn: "n = 19",
    exampleOut: "true",
  },
  {
    problemId: "8",
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
    description: "Given number k , removed kth element",
    exampleIn: "list: 1->2->3 , k=2",
    exampleOut: "1->3",
  },
];

const SUBMISSIONS = [];

app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
  });
});

app.get("/problems", (req, res) => {
  const filteredProblems = PROBLEMS.map((x) => ({
    problemId: x.problemId,
    difficulty: x.difficulty,
    acceptance: x.acceptance,
    title: x.title,
  }));

  res.json({
    problems: filteredProblems,
  });
});

app.get("/problem/:id", (req, res) => {
  const id = req.params.id;

  const problem = PROBLEMS.find((x) => x.problemId === id);

  if (!problem) {
    return res.status(411).json({});
  }

  res.json({
    problem,
  });
});

app.get("/me", auth, (req, res) => {
  const user = USERS.find((x) => x.id === req.userId);
  res.json({ email: user.email, id: user.id });
});

app.get("/submissions/:problemId", auth, (req, res) => {
  const problemId = req.params.problemId;
  const submissions = SUBMISSIONS.filter(
    (x) => x.problemId === problemId && x.userId === req.userId
  );
  res.json({
    submissions,
  });
});

app.post("/submission", auth, (req, res) => {
  const isCorrect = Math.random() < 0.5;
  const problemId = req.body.problemId;
  const submission = req.body.submission;

  if (isCorrect) {
    SUBMISSIONS.push({
      submission,
      problemId,
      userId: req.userId,
      status: "AC",
    });
    return res.json({
      status: "AC",
    });
  } else {
    SUBMISSIONS.push({
      submission,
      problemId,
      userId: req.userId,
      status: "WA",
    });
    return res.json({
      status: "WA",
    });
  }
});

app.post("/signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (USERS.find((x) => x.email === email)) {
    return res.status(403).json({ msg: "Email already exists" });
  }

  USERS.push({
    email,
    password,
    id: USER_ID_COUNTER++,
  });

  return res.json({
    msg: "Success",
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = USERS.find((x) => x.email === email);

  if (!user) {
    return res.status(403).json({ msg: "User not found" });
  }

  if (user.password !== password) {
    return res.status(403).json({ msg: "Incorrect password" });
  }

  // This token should be stored in the browser and sent in the header of HTTP future requests
  // from that particular user
  const token = jwt.sign(
    {
      id: user.id,
    },
    JWT_SECRET
  );

  return res.json({ token });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
