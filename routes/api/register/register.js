import express from "express";
import { register } from "./register.constants";
import { login } from "../login/login.constants";
import User from "../../../models/User";

const router = express.Router();

router.get(register, (req, res) => {
  res.render("register");
});

router.post(register, (req, res) => {
  const { email, username, password } = req.body;
  const newUser = new User({ email, username, password });
  newUser.save((err, user) => {
    console.log(err, user);
    res.redirect(login);
    res.end();
  });
});

export default router;
