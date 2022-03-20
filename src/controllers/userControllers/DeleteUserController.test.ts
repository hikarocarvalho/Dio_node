import createConnection from "../../database/index";
import { DeleteUserController } from "./DeleteUserController";
import { getConnection } from "typeorm";
import { makeMockRequest } from "../../utils/mocks/mockRequest";
import { makeMockResponse } from "../../utils/mocks/mockResponse";
import { FakeData } from "../../utils/mocks/fackeData/FakeData";

describe("DeleteUserController", () => {
  const deleteUserController = new DeleteUserController();

  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.close();
  });
  
  const fakeData = new FakeData();
  const response = makeMockResponse();

  const request = makeMockRequest({
    id:fakeData.fakeData[0].id,
  });
  
  it("Need to return the same data value", async () => {
    fakeData.createUser();
    await deleteUserController.handle(request, response);
    expect(response.state.status).toBe(204);
  });
});
