"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuty = exports.editDuty = exports.addDuty = exports.getDuties = void 0;
const dutyService_1 = require("../services/dutyService");
const getDuties = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const duties = yield (0, dutyService_1.getAllDuties)();
        res.json(duties);
    }
    catch (error) {
        let errorMessage = "Unknown error";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        else if (typeof error === "string") {
            errorMessage = error;
        }
        else if (typeof error === "object" &&
            error !== null &&
            "message" in error) {
            errorMessage = error.message;
        }
        res.status(500).json({ error: errorMessage });
    }
});
exports.getDuties = getDuties;
const addDuty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const newDuty = yield (0, dutyService_1.createDuty)(name);
        res.status(201).json(newDuty);
    }
    catch (error) {
        let errorMessage = "Unknown error";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        else if (typeof error === "string") {
            errorMessage = error;
        }
        else if (typeof error === "object" &&
            error !== null &&
            "message" in error) {
            errorMessage = error.message;
        }
        res.status(500).json({ error: errorMessage });
    }
});
exports.addDuty = addDuty;
const editDuty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name } = req.body;
        const updatedDuty = yield (0, dutyService_1.updateDuty)(id, name);
        res.json(updatedDuty);
    }
    catch (error) {
        let errorMessage = "Unknown error";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        else if (typeof error === "string") {
            errorMessage = error;
        }
        else if (typeof error === "object" &&
            error !== null &&
            "message" in error) {
            errorMessage = error.message;
        }
        res.status(500).json({ error: errorMessage });
    }
});
exports.editDuty = editDuty;
const dutyService_2 = require("../services/dutyService");
const removeDuty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedDuty = yield (0, dutyService_2.deleteDuty)(id);
        if (deletedDuty) {
            res.json(deletedDuty);
        }
        else {
            res.status(404).json({ message: "Duty not found" });
        }
    }
    catch (error) {
        let errorMessage = "Unknown error";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        else if (typeof error === "string") {
            errorMessage = error;
        }
        else if (typeof error === "object" &&
            error !== null &&
            "message" in error) {
            errorMessage = error.message;
        }
        res.status(500).json({ error: errorMessage });
    }
});
exports.removeDuty = removeDuty;
