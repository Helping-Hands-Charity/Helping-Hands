import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createBeneficiary,
  getBeneficiary,
  getBeneficiaries,
  deleteBeneficiary,
  updateBeneficiary,
} from "../controllers/beneficiary.js";

router.get("/:id", getBeneficiary);
router.post("/", createBeneficiary);
router.delete("/:id", deleteBeneficiary);
router.patch("/:id", updateBeneficiary);
router.get("/", getBeneficiaries);

export default router;
