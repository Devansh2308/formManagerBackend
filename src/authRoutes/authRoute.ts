import express from "express";
import {
  forgotPasswordController,
  googleController,
  localLoginController,
  localSignInController,
  updatePassword,
} from "../authControllers/authController";

const router = express();

router.post(
  "/register",

  localSignInController
);

router.post("/login", localLoginController);

// forgot reset password
router.put(
  "/forgotpassword",
  forgotPasswordController
);
router.put("/resetpassword", updatePassword);

// Google and Facebook Login
router.post("/googlelogin", googleController);

export default router;
