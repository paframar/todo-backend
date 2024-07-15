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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDuty = exports.updateDuty = exports.createDuty = exports.getAllDuties = void 0;
const database_1 = __importDefault(require("../database"));
const getAllDuties = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.query("SELECT * FROM duties ORDER BY id");
    return result.rows;
});
exports.getAllDuties = getAllDuties;
const createDuty = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.query("INSERT INTO duties (name) VALUES ($1) RETURNING *", [name]);
    return result.rows[0];
});
exports.createDuty = createDuty;
const updateDuty = (id, name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.query("UPDATE duties SET name = $1 WHERE id = $2 RETURNING *", [name, id]);
    return result.rows[0];
});
exports.updateDuty = updateDuty;
const deleteDuty = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.query("DELETE FROM duties WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
});
exports.deleteDuty = deleteDuty;
