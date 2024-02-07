const express = require("express");
const {
  createAccountCtrl,
  singleAccountFetchCtrl,
  deleteAccountCtrl,
  updateAccountCtrl,
} = require("../../controllers/accounts/accountsCtrl");

const accountsRoute = express.Router();

accountsRoute.post("/", createAccountCtrl);
accountsRoute.get("/:id", singleAccountFetchCtrl);
accountsRoute.delete("/:id", deleteAccountCtrl);
accountsRoute.put("/:id", updateAccountCtrl);
module.exports = accountsRoute;
