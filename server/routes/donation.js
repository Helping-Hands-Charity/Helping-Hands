import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createDonation,
  getDonation,
  getDonations,
  deleteDonation,
  updateDonation,
} from "../controllers/donation.js";

router.get("/:id", getDonation);
router.post("/", createDonation);
router.delete("/:id", deleteDonation);
router.patch("/:id", updateDonation);
router.get("/", getDonations);

export default router;
