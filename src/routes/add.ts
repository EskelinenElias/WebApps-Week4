import { Router, Request, Response } from 'express';
import { database } from '../app';

const router = Router();

// GET route to get a greeting
router.post('/', (req: Request, res: Response) => {
  if (!req.body.user || !req.body.todo) {
    res.status(400).json(`Could not add todo.`); 
    return;
  }
  // Parse the request
  const name: string = req.body.user;
  const todo: string = req.body.todo;
  // Add todo to the "database"
  database.addTodo(name, todo);
  // Send the response
  res.json(`Todo added successfully for user ${name}.`);
});

export default router; 
