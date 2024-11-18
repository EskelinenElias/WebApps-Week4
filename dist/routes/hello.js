"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET route to get a greeting
router.get('/hello', (req, res) => {
    res.json({
        msg: "Hello world!"
    });
});
exports.default = router;
