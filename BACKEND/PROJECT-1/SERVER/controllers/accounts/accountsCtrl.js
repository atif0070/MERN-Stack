const createAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Create Account Route" });
  } catch (error) {
    console.log(error);
  }
};

const singleAccountFetchCtrl = async (req, res) => {
  try {
    res.json({ msg: " Single Account Fetched" });
  } catch (error) {
    console.log(error);
  }
};

const deleteAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Account Deleted" });
  } catch (error) {
    console.log(error);
  }
};

const updateAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: " Account Updated" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createAccountCtrl,
  singleAccountFetchCtrl,
  deleteAccountCtrl,
  updateAccountCtrl,
};
