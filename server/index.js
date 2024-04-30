const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./database/connection");
const categoryRoutes = require('./routes/categoryRoutes')

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/category',categoryRoutes)

http://localhost:3100/api/category/addcategory

connectDB()
  .then(() => {
    app.listen(process.env.PORT);
    console.log(`App running on port ${process.env.PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
