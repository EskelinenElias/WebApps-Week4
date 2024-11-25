"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_1 = require("../app");
const router = (0, express_1.Router)();
// DELETE route to delete a user
router.delete('/', (req, res) => {
    if (!req.body.user) {
        res.status(400).json(`Could not delete user.`);
        return;
    }
    // Parse the request
    const user = req.body.user;
    // Delete user
    if (app_1.database.deleteUser(user)) {
        // User deleted
        res.json({ message: 'User deleted successfully.' });
    }
    else {
        // User not found
        res.status(400).json({ message: 'User not found.' });
    }
});
exports.default = router;
