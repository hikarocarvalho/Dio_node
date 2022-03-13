import { Request, Response } from 'express';

class CreateUserController{
    handle(request:Request, response:Response){
        return response.json([
          {
            name:"Pedro"
          },
          {
            name:"Ana"
          },
          {
            name:"hikaro"
          }
        ]);
      };
}

export { CreateUserController }