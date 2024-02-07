require("./config/dbConnect");
const express = require("express");
const usersRoute = require("./routes/users/usersRoute");
const accountsRoute = require("./routes/accounts/accountsRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const app = express();

app.use(express.json());
// register route
app.use("/api/v1/users", usersRoute);
// accounts route
app.use("/api/v1/accounts", accountsRoute);

// transactions route
app.use("/api/v1/transactions", transactionsRoute);

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
