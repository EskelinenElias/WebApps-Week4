import { Router, Request, Response } from 'express';
import { database } from '../app';

const router = Router();

// DELETE route to delete a user
router.delete('/', (req: Request, res: Response) => {
  if (!req.body.user) {
    res.status(400).json(`Could not delete user.`);
    return;
  }
  // Parse the request
  const user: string = req.body.user;
  // Delete user
  if (database.deleteUser(user)) {
    // User deleted
    res.json({ message: 'User deleted successfully.' });
  } else {
    // User not found
    res.status(400).json({ message: 'User not found.' });
  }
});

export default router; 
