const express = require("express");
const { userSignUp, userLogin } = require("../controller/user.controller");
const router = express.Router();

router.post("/signUp", userSignUp);
router.post("/login", userLogin);

module.exports = router;
