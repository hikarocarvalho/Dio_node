import { Request, Response } from "express";
import { UpdateUserService } from "./../../services/userServices/UpdateUserService";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const updateUserService = new UpdateUserService();

    if(request.params.id.length === 0){
      return response.status(400).json({message:"id is not included"});
    }

    if(request.body.name.length === 0){
      return response.status(400).json({message:"name is not included"});
    }

    const preload = {
      id: request.params.id,
      name: request.body.name,
      email: request.body.email,
    }

    const userUpdated = await updateUserService.execute(preload);

    response.status(204).json();
  }
}

export { UpdateUserController };
