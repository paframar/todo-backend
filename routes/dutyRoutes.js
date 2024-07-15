"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dutyController_1 = require("../controllers/dutyController");
const router = express_1.default.Router();
router.get("/duties", dutyController_1.getDuties);
router.post("/duties", dutyController_1.addDuty);
router.put("/duties", dutyController_1.editDuty);
router.delete("/duties/:id", dutyController_1.removeDuty);
exports.default = router;
