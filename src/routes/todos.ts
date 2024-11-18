import { Router, Request, Response } from 'express';
import { database } from '../app';

const router = Router();

// GET route to get todos for user
router.get('/:id', async (req: Request, res: Response) => {
  // Parse the request
  const id: string = req.params.id; 
  console.log(`Searching for user ${id}`); 
  // Get todos for the id
  const todos = database.getTodos(id); 
  // Send the response
  res.json("User not found.");
});

export default router; 
