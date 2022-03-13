import { Router, Request, Response } from 'express';
import { CreateUserController } from './constrollers/CreateUserController';
const router = Router();
const createUserController = new CreateUserController();

router.get("/", (request: Request, response: Response) => {
    return response.json({ message: "Welcome to DIO API" });
  });
  
router.get('/users', createUserController.handle);

export { router }
  