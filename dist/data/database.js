"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
class Database {
    users;
    constructor() {
        this.users = [];
    }
    getTodos(name) {
        if (!name) {
            return null;
        }
        // Check if the user exists
        this.users.forEach(user => {
            if (user.name == name) {
                // Return user's todos
                return user.todos;
            }
        });
        return null;
    }
    add(name, todo) {
        if (!name) {
            return;
        }
        // Check if the user exists
        this.users.forEach(user => {
            if (user.name == name) {
                // Add todos to existing user
                user.todos.push(todo);
                return;
            }
        });
        // Add new user
        const todos = [todo];
        const user = { name, todos };
        this.users.push(user);
    }
}
exports.Database = Database;
