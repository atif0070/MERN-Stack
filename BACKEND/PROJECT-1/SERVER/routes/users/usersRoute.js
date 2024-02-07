const express = require("express");
const {
  registerUserCtrl,
  loginUserCtrl,
  deleteUserCtrl,
  singleUserFetch,
  updateUserCtrl,
} = require("../../controllers/users/usersCtrl");

const usersRoute = express.Router();

usersRoute.post("/register", registerUserCtrl);

usersRoute.post("/login", loginUserCtrl);
usersRoute.delete("/:id", deleteUserCtrl);

usersRoute.get("/profile/:id", singleUserFetch);

usersRoute.put("/:id", updateUserCtrl);

module.exports = usersRoute;
