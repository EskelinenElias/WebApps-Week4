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
    addUser(name, todos) {
        if (!name) {
            return;
        }
        // Check if the user already exists
        const user = this.users.find(user => user.name === name);
        if (user) {
            // User found
            user.todos.push(...todos);
            return;
        }
        // User not found; add new user
        const newUser = { name: name, todos: todos };
        this.users.push(newUser);
    }
    addTodo(name, todo) {
        if (!name) {
            return;
        }
        // Check if the user exists
        const user = this.users.find(user => user.name === name);
        if (user) {
            // User found
            user.todos.push(todo);
            return;
        }
        // User not found; add new user
        const todos = [todo];
        const newUser = { name: name, todos: todos };
        this.users.push(newUser);
    }
    deleteUser(name) {
        // Check if the user exists
        const index = this.users.findIndex(user => user.name === name);
        if (index !== -1) {
            // User found; delete user
            this.users.splice(index, 1);
            return true;
        }
        // User not found
        return false;
    }
}
exports.Database = Database;
