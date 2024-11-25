"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
// A "database" class
class Database {
    // Storage for users and todos
    users;
    // Class constructor method
    constructor() {
        // Initialize storage array
        this.users = [];
    }
    // Method to get all users and todos
    getUsers() {
        // Return list of users and todos
        return this.users;
    }
    // Method to get todos for user
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
    // Method to create new user
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
    // Method to add todo for existing user
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
    // Method to delete an user and todos
    deleteUser(name) {
        if (!name) {
            return false;
        }
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
    // Method to delete a todo
    deleteTodo(name, todo) {
        if (!name) {
            return false;
        }
        // Check if the user exists
        const user = this.users.find(user => user.name === name);
        if (user) {
            // Get todo index
            const index = typeof (todo) === "string" ? user.todos.indexOf(todo) : todo;
            // Check that the index is valid
            if (index < 0 || user.todos.length <= index) {
                return false;
            }
            // Delete todo
            user.todos.splice(index, 1);
            return true;
        }
        // User not found 
        return false;
    }
}
exports.Database = Database;
