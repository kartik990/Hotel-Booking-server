import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  delHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//get
router.get("/find/:id", getHotel);

//get all
router.get("/", getHotels);

//create
router.post("/", createHotel);

//update
router.put("/:id", verifyAdmin, updateHotel);

//delete
router.delete("/:id", delHotel);

//query based on city
router.get("/countByCity", countByCity);

//query based on type
router.get("/countByType", countByType);

//get hotel rooms
router.get("/room/:id", getHotelRooms);

export default router;
