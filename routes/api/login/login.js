import express from "express";
import { login } from "./login.constants";
import User from "../../../models/User";
import { users } from "../user/user.constants";

const router = express.Router();

router.get(login, (req, res) => {
  res.render("login");
});

router.post(login, (req, res) => {
  const { username } = req.body;
  User.findOne({ username }).then(user => {
    console.log(user);

    if (user) {
      res.redirect(`${users}/${user.username}`);
      res.end();
    }
  });
});

export default router;
