import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import routes from "./routes/api";

const dbPass = process.argv[2];

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  `mongodb+srv://admin:${dbPass}@testdb-wjojj.mongodb.net/test?retryWrites=true&w=majority`
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("[ERROR: DB connection failed]");
});

db.on("open", () => {
  console.log("[DB connection success]");
});

app.get("/", function(req, res) {
  res.render("index", { title: null });
});

app.use(routes);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
