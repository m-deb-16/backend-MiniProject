const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { error } = require("console");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const contactRoutes = require("./routes/contactRoutes");
app.use(express.json());
const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://mainakdeb016:Qw3rty!234@cluster0.ol2hnd3.mongodb.net/compufy"
    )
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB Database");
    });
};

connectDB();

app.use("/contactForm", contactRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
