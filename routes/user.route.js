const express = require("express");
const user = require("../config/controller/user.controller");
const router = express.Router();

router.post("/signUp", user.userSignUp);
// router.post("/login", userLogin);

module.exports = router;
