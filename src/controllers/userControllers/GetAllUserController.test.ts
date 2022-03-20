import createConnection from "../../database/index";
import { GetAllUserController } from "./GetAllUserController";
import { getConnection } from "typeorm";
import { makeMockRequest } from "../../utils/mocks/mockRequest";
import { makeMockResponse } from "../../utils/mocks/mockResponse";

describe("GetAllUserController", () => {
  const getAllUserController = new GetAllUserController();

  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.query("DELETE FROM USERS");
    await connection.close();
  });

  const response = makeMockResponse();
  const request = makeMockRequest({});

  it("Need to return the same data value", async () => {
    await getAllUserController.handle(request, response);
    expect(response.state.status).toBe(200);
  });
});
