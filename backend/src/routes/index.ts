import express from "express";
import { isAuthenticated } from "../middlewares/userAuthenticated";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from index route page!");
});

router.get("/dashboard", isAuthenticated, (req, res) => {
  res.redirect("/dashboard");
});

export default router;
