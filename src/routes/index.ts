import { Router, Request, Response } from 'express';
import addRoutes from "./add";
import todoRoutes from "./todos"; 
import deleteRoutes from "./delete"; 

// Create router
const router = Router();

// Add routes
router.use('/add', addRoutes); 
router.use('/todos', todoRoutes);
router.use('/delete', deleteRoutes); 

export default router; 
