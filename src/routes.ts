import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/userControllers/CreateUserController";
import { GetAllUserController } from "./controllers/userControllers/GetAllUserController";
import { UpdateUserController } from "./controllers/userControllers/UpdateUserController";
import { DeleteUserController } from "./controllers/userControllers/DeleteUserController";

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Welcome to DIO API" });
});

router
  .post("/user", createUserController.handle)
  .get("/user", getAllUserController.handle)
  .patch("/user/:id", updateUserController.handle)
  .delete("/user/:id", deleteUserController.handle);

export { router };
