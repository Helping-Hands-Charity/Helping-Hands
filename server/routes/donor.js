import express from "express";
const router = express.Router();

import {createDonor, getDonor, getDonors, deleteDonor, getDonorsBySearch, updateDonor} from "../controllers/donor.js";

router.get("/:id",getDonor);
router.post("/", createDonor);
router.delete("/:id", deleteDonor);
router.patch("/:id", updateDonor);
router.get("/", getDonors);
router.get("/search", getDonorsBySearch);


export default router;
