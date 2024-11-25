import { TUser } from "../models/user"

class Database {
  users: TUser[]; 
  
  constructor() {
    this.users = []; 
  }
  
  getTodos(name: string): string[]|null {
    if (!name) { return null; }
    // Check if the user exists
    const user = this.users.find(user => user.name === name);
    if (user) {
      // User found
      return user.todos; 
    }
    // User not found
    return null; 
  }
  
  addUser(name: string, todos: string[]) {
    if (!name) { return; }
    // Check if the user already exists
    const user = this.users.find(user => user.name === name);
    if (user) {
      // User found
      user.todos.push(...todos);
      return; 
    }
    // User not found; add new user
    const newUser: TUser = { name:name, todos:todos }; 
    this.users.push(newUser);
  }
  
  addTodo(name: string, todo: string) {
    if (!name) { return; }
    // Check if the user exists
    const user = this.users.find(user => user.name === name);
    if (user) {
      // User found
      user.todos.push(todo);
      return; 
    }
    // User not found; add new user
    const todos: string[] = [todo]; 
    const newUser: TUser = { name:name, todos:todos }; 
    this.users.push(newUser);
  }
  
  deleteUser(name: string): boolean {
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

export {Database}