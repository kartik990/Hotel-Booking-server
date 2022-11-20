import express from "express";
import {
  createRoom,
  delRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//get
router.get("/:id", getRoom);

//get all
router.get("/", getRooms);

//create
router.post("/:hotelid", createRoom);

//update
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//delete
router.delete("/:id/:hotelid", delRoom);

export default router;
