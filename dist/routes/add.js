"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_1 = require("../app");
const router = (0, express_1.Router)();
// GET route to get a greeting
router.post('/', (req, res) => {
    if (!req.body.user || !req.body.todo) {
        res.status(400).json({ message: "Could not add todo" });
        return;
    }
    // Parse the request
    const name = req.body.user;
    const todo = req.body.todo;
    // Add todo to the "database"
    app_1.database.add(name, todo);
    // Send the response
    res.json(`/Todo successfully added for user ${name}./i`);
});
exports.default = router;
