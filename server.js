require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const paymentRouter = require("./route/payment");

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ==== set route ====
app.use("/api", paymentRouter);

// ==== set production ====
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// ==== start server ====
app.listen(PORT, error => {
  if (error) throw error;
  console.log(`server start at port: ${PORT}`);
});
