const createTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "Create Transaction" });
  } catch (error) {
    console.log(error);
  }
};
const allTransactionsFetchCtrl = async (req, res) => {
  try {
    res.json({ msg: "Get All Transactions" });
  } catch (error) {
    console.log(error);
  }
};
const singleTransactionFetchCtrl = async (req, res) => {
  try {
    res.json({ msg: "Single Transaction Fetched" });
  } catch (error) {
    console.log(error);
  }
};
const deleteTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "Transaction Deleted" });
  } catch (error) {
    console.log(error);
  }
};

const updateTransactionCtrl = (req, res) => {
  try {
    res.json({ msg: "Transaction Updated" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTransactionCtrl,
  allTransactionsFetchCtrl,
  singleTransactionFetchCtrl,
  deleteTransactionCtrl,
  updateTransactionCtrl,
};
