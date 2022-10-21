import express from "express";
const router = express.Router();

import {
  createDonation,
  getDonation,
  getDonations,
  deleteDonation,
  getDonationsBySearch,
  updateDonation,
} from "../controllers/donation.js";

router.get("/:id", getDonation);
router.post("/", createDonation);
router.delete("/:id", deleteDonation);
router.patch("/:id", updateDonation);
router.get("/", getDonations);
router.get("/search", getDonationsBySearch);

export default router;
