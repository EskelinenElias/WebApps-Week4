"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_1 = require("../app");
const router = (0, express_1.Router)();
// GET route to get todos for user
router.get('/:id', async (req, res) => {
    // Parse the request
    const id = req.params.id;
    console.log(`Searching for user ${id}`);
    // Get todos for the id
    const todos = app_1.database.getTodos(id);
    // Send the response
    if (todos) {
        res.json({ todos: todos });
    }
    else {
        res.json("User not found.");
    }
});
exports.default = router;
