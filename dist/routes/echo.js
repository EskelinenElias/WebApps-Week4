"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET route to echo id
router.get('/echo/:id', (req, res) => {
    // Parse the request
    const id = req.params.id;
    // Send the response
    res.json({ id: id });
});
exports.default = router;
