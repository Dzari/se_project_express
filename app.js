const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { errors } = require("celebrate");

const router = require("./routes");

const app = express();
const { PORT = 3001 } = process.env;
const { errorHandling } = require("./middlewares/errorHandling");
const { requestLogger, errorLogger } = require("./middlewares/logger");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/wtwr_db",
);

app.use(cors());

app.use(express.json());

app.use(requestLogger);

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

app.use("/", router);

app.use(errorLogger);

app.use(errors());

app.use(errorHandling);

app.listen(PORT);
