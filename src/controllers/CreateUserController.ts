import { Request, Response } from "express";
import { CreateUserService } from "./../services/CreateUserService";

class CreateUserController {
  handle(request: Request, response: Response) {
    const createUserService = new CreateUserService();

    const name = request.body.name;
    const email = request.body.email;

    if (name.length === 0) {
      return response.status(400).json({ message: "Enter with all values." });
    }
    const result = createUserService.execute({ name, email });
    return response.status(201).json({ message: `user created`, response: result });
  }
}

export { CreateUserController };
