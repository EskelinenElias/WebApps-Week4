"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// POST route to calculate the sum of numbers
router.post('/sum', (req, res) => {
    // Parse the request
    const numbers = req.body.numbers;
    // Calculate the sum 
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    // Send response
    res.json({ sum: sum });
});
exports.default = router;
