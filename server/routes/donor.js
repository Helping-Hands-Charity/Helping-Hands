import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js"

import {createDonor, getDonor, getDonors, deleteDonor, updateDonor} from "../controllers/donor.js";

router.get("/:id",getDonor);
router.post("/", createDonor);
router.delete("/:id", deleteDonor);
router.patch("/:id", updateDonor);
router.get("/", getDonors);


export default router;
