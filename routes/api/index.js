import express from "express";
import login from "./login/login";
import register from "./register/register";
import user from "./user/user";

const router = express.Router();

router.use(user);
router.use(login);
router.use(register);

export default router;
