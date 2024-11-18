"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_1 = require("../app");
const router = (0, express_1.Router)();
// GET route to get a greeting
router.post('/', (req, res) => {
    if (!req.body.user || !req.body.todos) {
        res.status(400).json({ message: "Could not add todo" });
        return;
    }
    // Parse the request
    const name = req.body.name;
    const todos = req.body.todos;
    // Add todo to the "database"
    app_1.database.add(name, todos);
    // Send the response
    res.json({ message: `Todo successfully added for user ${name}.` });
});
exports.default = router;
