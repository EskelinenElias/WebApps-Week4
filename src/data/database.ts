import fs from 'fs/promises';
import path from 'path';
import { TUser } from "../models/user"

// A "database" class
class Database {
  // Storage for users and todos
  users: TUser[] = []; 
  path: string;
  
  // Class constructor method
  constructor(path: string) {
    // Data path
    this.path = path; 
    this.init()
  }
  
  // This function reads 
  private async init() {
      this.users = await this.readData() || [];
  }
  
  // Method to read data from file
  async readData(): Promise<void|TUser[]> {
    try {
      // Read file contents
      const response = await fs.readFile(this.path, 'utf-8'); 
      // Check the response
      if (!response) {
        // Return empty array
        console.error(`Failed to read file`)
        return [];
      }
      // Parse the response
      const data = await JSON.parse(response) as TUser[];
      return data; 
    } catch(error: any) {
      // Check if the error was raised because the file does not exist
      if (error.code === 'ENOENT') {
        // File does not exist; create new file 
        console.log(`Creating new file to ${this.path}`)
        await fs.writeFile(this.path, JSON.stringify([])); 
        // Return empty array
        return [];  
      }
      // Unknown error
      console.error(error)
      throw error;
    }
  }
  
  // Function to write data to the file
  async writeData(): Promise<void> {
    // Create json object
    const json = JSON.stringify(this.users, null, 2);
    // Write to file
    fs.writeFile(this.path, json).catch((err) => {
      console.error("Error writing to data file:", err);
    });
  }
  
  // Method to get all users and todos
  getUsers(): TUser[] {
    // Return list of users and todos
    return this.users; 
  }
  
  // Method to get todos for user
  getTodos(name: string): string[]|null {
    if (!name) { return null; }
    // Find the user with the matching name
    const user = this.users.find(user => user.name === name);
    // If user was found, return todos
    return user ? user.todos : null; 
  }
  
  // Method to create new user
  addUser(name: string, todos: string[]) {
    if (!name) { return; }
    // Find the user with the matching name
    const user = this.users.find(user => user.name === name);
    // Check if user was found
    if (user) {
      // User found; add todos to existing user
      user.todos.push(...todos);
    } else {
      // User not found; add new user
      const newUser: TUser = { name:name, todos:todos }; 
      this.users.push(newUser);
    }
    // Write changes to file
    this.writeData();
  }
  
  // Method to add todo for existing user
  addTodo(name: string, todo: string) {
    if (!name) { return; }
    // Find the user with the matching name
    const user = this.users.find(user => user.name === name);
    // Check if user was found
    if (user) {
      // User found; add todo to the existing user
      user.todos.push(todo);
    } else {
      // User not found; add new user
      const newUser: TUser = { name:name, todos:[todo] }; 
      this.users.push(newUser);
    }
    // Write changes to file
    this.writeData();
  }
  
  // Method to delete an user and todos
  deleteUser(name: string): boolean {
    if (!name) { return false; }
    // Find the index of the user with the matching name
    const index = this.users.findIndex(user => user.name === name);
    // Check if the user was found
    if (index !== -1) {
      // The user was found; delete the user
      this.users.splice(index, 1);
      // Write changes to file
      this.writeData(); 
      return true; 
    }
    // The user not found
    return false; 
  }
  
  // Method to delete a todo
  deleteTodo(name: string, todo: number|string): boolean {
    if (!name) { return false; }
    // Find user with matching name
    const user = this.users.find(user => user.name === name);
    // Check if user was found
    if (user) {
      // Get todo index
      const index = typeof (todo) === "string" ? user.todos.indexOf(todo) : todo; 
      // Check that the index is valid
      if (index < 0 || user.todos.length <= index) {
        return false;
      }
      // Delete todo
      user.todos.splice(index, 1); 
      // Write changes to file
      this.writeData(); 
      return true; 
    }
    // User not found 
    return false; 
  }
}

export {Database}