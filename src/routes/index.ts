import { Router, Request, Response } from 'express';
import addRoutes from "./add";

// Create router
const router = Router();

// Add routes
router.use('/add', addRoutes); 

export default router; 
