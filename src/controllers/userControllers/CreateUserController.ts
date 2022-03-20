import { Request, Response } from "express";
import { CreateUserService } from "./../../services/userServices/CreateUserService";
import { v4 as uuid } from "uuid";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const createUserService = new CreateUserService();

    const id = uuid();
    const name = request.body.name;
    const email = request.body.email;

    if (name.length === 0) {
      return response.status(400).json({ message: "Enter with all values." });
    }
    const result = await createUserService.execute({ id, name, email });
    return response.status(201).json(result);
  }
}

export { CreateUserController };
