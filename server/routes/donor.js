import express from "express";
const router = express.Router();
<<<<<<< HEAD
import auth from "../middleware/auth.js";

import {
  createDonor,
  getDonor,
  getDonors,
  deleteDonor,
  updateDonor,
} from "../controllers/donor.js";

router.get("/:id", getDonor);
=======
import auth from "../middleware/auth.js"

import {createDonor, getDonor, getDonors, deleteDonor, updateDonor} from "../controllers/donor.js";

router.get("/:id",getDonor);
>>>>>>> de0bd18b104782e742ae7fc270b8b2616c5fdc67
router.post("/", createDonor);
router.delete("/:id", deleteDonor);
router.patch("/:id", updateDonor);
router.get("/", getDonors);

<<<<<<< HEAD
=======

>>>>>>> de0bd18b104782e742ae7fc270b8b2616c5fdc67
export default router;
