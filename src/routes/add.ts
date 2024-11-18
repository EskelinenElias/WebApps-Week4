import { Router, Request, Response } from 'express';
import { database } from '../app';

const router = Router();

// GET route to get a greeting
router.post('/', (req: Request, res: Response) => {
  if (!req.body.user || !req.body.todos) {
    res.status(400).json({ message: "Could not add todo" }); 
    return;
  }
  // Parse the request
  const name = req.body.name;
  const todos = req.body.todos;
  // Add todo to the "database"
  database.add(name, todos);
  // Send the response
  res.json({ message: 'Todo successfully added',});
});

export default router; 