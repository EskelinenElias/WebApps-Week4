import { Router, Request, Response } from 'express';
import addRoutes from "./add";
import todos from "./todos"

// Create router
const router = Router();

// Add routes
router.use('/add', addRoutes); 
router.use('/todos', todos); 

export default router; 
