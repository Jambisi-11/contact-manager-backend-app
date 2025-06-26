const express = require("express");
const dotenv = require("dotenv").config();
const Router = require('./routes/contactRoutes');
const errorHandler = require("./Middleware/errorhandler");

const app = express();

  app.use(express.json());
// middleware
app.use("/api/contacts", Router);
app.use(errorHandler)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`This app is listening to port ${port}`);
});
