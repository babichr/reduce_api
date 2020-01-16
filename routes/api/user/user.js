import express from "express";
import User from "../../../models/User";
import { user } from "./user.constants";

const router = express.Router();

router.get(user, (req, res) => {
  const { username } = req.params;

  User.findOne({ username }).then(user => {
    if (user) {
      console.log(username);
      res.render("user", { id: user._id });
    }
  });
});

export default router;
