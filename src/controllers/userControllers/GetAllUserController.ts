import { Request, Response } from "express";
import { GetAllUserService } from "./../../services/userServices/GetAllUserService";

class GetAllUserController{
    async handle(request:Request,response:Response){
        const getAllUserService = new GetAllUserService();

        const users = await getAllUserService.execute();

        response.status(200).json(users);
    }
}

export { GetAllUserController };