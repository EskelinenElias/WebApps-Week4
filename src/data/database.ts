import { TUser } from "../models/user"

class Database {
  users: TUser[]; 
  
  constructor() {
    this.users = []; 
  }
  
  getTodos(name: string): string[]|null {
    if (!name) { return null; }
    // Check if the user exists
    this.users.forEach(user => { 
      if (user.name == name) {
        // Return user's todos
        return user.todos; 
      }
    });
    return null; 
  }
  
  add(name: string, todo: string) {
    if (!name) { return; }
    // Check if the user exists
    this.users.forEach(user => { 
      if (user.name == name) {
        // Add todos to existing user
        user.todos.push(todo);
        return; 
      }
    });
    // Add new user
    const todos: string[] = [todo]; 
    const user: TUser = { name, todos }; 
    this.users.push(user);
  }
}

export {Database}