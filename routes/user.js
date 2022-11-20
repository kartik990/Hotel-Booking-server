import express from "express";
import { getUser, getUsers, delUser, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("You are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("You are logged in and can delete account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("You are admin");
// });

//get
router.get("/:id", verifyUser, getUser);

//get all
// router.get("/", verifyAdmin, getUsers);
router.get("/", getUsers);

//update
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id", delUser);

export default router;
