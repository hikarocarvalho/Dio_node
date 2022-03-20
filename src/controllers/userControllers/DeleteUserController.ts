import { Request, Response } from "express";
import { DeleteUserService } from "./../../services/userServices/DeleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const deleteUserService = new DeleteUserService();

    if(request.params.id.length === 0){
      return response.status(400).json({message:"id is not included"});
    }

    const preload = {
      id: request.params.id,
    }

    const removedUser = await deleteUserService.execute(preload);

    response.status(204).json();
  }
}

export { DeleteUserController };
