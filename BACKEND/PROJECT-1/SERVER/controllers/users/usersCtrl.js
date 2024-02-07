const User = require("../../model/User");

const registerUserCtrl = async (req, res) => {
  const { fullname, email, password } = req.body;
  console.log(req.body);
  try {
    //checking if the user already exists
    const user = await User.create({ fullname, email, password });

    return res.json({ msg: "User Registered" }, user);
  } catch (error) {
    res.json(error);
  }
};
const loginUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "User Logged In" });
  } catch (error) {
    console.log(error);
  }
};

const deleteUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "User Deleted" });
  } catch (error) {
    res.json(error);
  }
};

const singleUserFetch = async (req, res) => {
  try {
    res.json({ msg: "Single User Fetched" });
  } catch (error) {
    console.log(error);
  }
};

const updateUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "User Updated" });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  registerUserCtrl,
  loginUserCtrl,
  deleteUserCtrl,
  singleUserFetch,
  updateUserCtrl,
};
