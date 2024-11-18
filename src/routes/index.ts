import { Router, Request, Response } from 'express';
import addRoutes from "./add";

const router = Router();

router.use('/', addRoutes); 

export default router; 
