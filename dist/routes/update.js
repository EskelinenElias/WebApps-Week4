"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_1 = require("../app");
const router = (0, express_1.Router)();
// PUT route to delete a user
router.put('/', (req, res) => {
    if (!req.body.name || !req.body.todo) {
        console.error("Could not delete todo", req.body.name, req.body.todo);
        res.status(400).json(`Could not delete todo.`);
        return;
    }
    // Parse the request
    const name = req.body.name;
    const todo = req.body.todo;
    console.log(`Deleting todo ${todo} of user ${name}`);
    // Delete user
    if (app_1.database.deleteTodo(name, todo)) {
        // User deleted
        res.json({ message: 'Todo deleted successfully.' });
    }
    else {
        // User not found
        res.status(400).json({ message: `Could not delete todo ${todo} for user ${name}` });
    }
});
exports.default = router;
