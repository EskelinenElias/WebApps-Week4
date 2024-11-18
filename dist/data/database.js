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
        const user = this.users.find(user => user.name === name);
        if (user) {
            // User found
            return user.todos;
        }
        // User not found
        return null;
    }
    add(name, todo) {
        if (!name) {
            return;
        }
        console.log("Adding:", name, todo);
        // Check if the user exists
        this.users.forEach(user => {
            if (user.name == name) {
                // Add todos to existing user
                user.todos.push(todo);
                console.log("Todos: ", user.todos);
                return;
            }
        });
        // Add new user
        const todos = [todo];
        const user = { name: name, todos: todos };
        this.users.push(user);
    }
}
exports.Database = Database;
