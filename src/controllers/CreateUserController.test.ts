import createConnection from "../database/index";
import { CreateUserController } from "./CreateUserController";
import { Request } from "express";
import { makeMockResponse } from "../utils/mocks/mockResponse";
import { getConnection } from "typeorm";

describe("CreateUserController", () => {
    const createUserController = new CreateUserController();
    const response = makeMockResponse();

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM USERS');
        await connection.close();
    });
    
    const request = {
        body: {
          name: "usuário",
          email: "email@email.com",
        },
      } as Request;

  it("Need return user id", async () => {
    await createUserController.handle(request, response);
    expect(response.state.status).toBe(201);
  });

  it('Need to return 400 like status when the name is not received', async() => {
      request.body.name="";
      await createUserController.handle(request,response);
      expect(response.state.status).toBe(400);
  });

  it('Need to return 201 like status when the email is not received', async() => {
    request.body.name = "user";
    request.body.email = "";
    await createUserController.handle(request,response);
    expect(response.state.status).toBe(201);
  });

});
