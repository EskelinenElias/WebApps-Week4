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
  
  add(name: string, todo: string) {
    if (!name) { return; }
    console.log("Adding:", name, todo)
    // Check if the user exists
    this.users.forEach(user => { 
      if (user.name == name) {
        // Add todos to existing user
        user.todos.push(todo);
        console.log("Todos: ", user.todos)
        return; 
      }
    });
    // Add new user
    const todos: string[] = [todo]; 
    const user: TUser = { name:name, todos:todos }; 
    this.users.push(user);
  }
}

export {Database}