import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createVolunteer,
  getVolunteer,
  getVolunteers,
  deleteVolunteer,
  updateVolunteer,
} from "../controllers/volunteer.js";

router.get("/:id", getVolunteer);
router.post("/", createVolunteer);
router.delete("/:id", deleteVolunteer);
router.patch("/:id", updateVolunteer);
router.get("/", getVolunteers);

export default router;
