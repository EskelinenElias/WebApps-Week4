"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const add_1 = __importDefault(require("./add"));
// Create router
const router = (0, express_1.Router)();
// Add routes
router.use('/add', add_1.default);
exports.default = router;
