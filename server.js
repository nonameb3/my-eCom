require("dotenv").config();
const express = require("express");
const enforce = require('express-sslify');
const cors = require("cors");
const compression = require("compression");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const paymentRouter = require("./route/payment");

// ==== Config service ====
app.use(compression()); // set gzip
app.use(cors()); // set cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ==== set route ====
app.use("/api", paymentRouter);

// ==== set production ====
if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true })); // set https
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"))
  });

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// ==== start server ====
app.listen(PORT, error => {
  if (error) throw error;
  console.log(`server start at port: ${PORT}`);
});
