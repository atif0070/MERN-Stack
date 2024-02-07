const express = require("express");
const {
  createTransactionCtrl,
  allTransactionsFetchCtrl,
  singleTransactionFetchCtrl,
  deleteTransactionCtrl,
  updateTransactionCtrl,
} = require("../../controllers/transactions/transactionsCtrl");

const transactionsRoute = express.Router();

transactionsRoute.post("", createTransactionCtrl);

transactionsRoute.get("", allTransactionsFetchCtrl);

transactionsRoute.get("/:id", singleTransactionFetchCtrl);

transactionsRoute.delete("/:id", deleteTransactionCtrl);

transactionsRoute.put("/:id", updateTransactionCtrl);

module.exports = transactionsRoute;
