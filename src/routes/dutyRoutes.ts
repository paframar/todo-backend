import express from "express";
import {
  getDuties,
  addDuty,
  editDuty,
  removeDuty,
} from "../controllers/dutyController";

const router = express.Router();

router.get("/duties", getDuties);
router.post("/duties", addDuty);
router.put("/duties", editDuty);
router.delete("/duties/:id", removeDuty);

export default router;
