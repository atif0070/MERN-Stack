const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://atif0070:o47rxLaX6AlhSmLc@cluster0.mcioapl.mongodb.net/income-expenses-app?retryWrites=true&w=majority"
    );
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

dbConnect();
