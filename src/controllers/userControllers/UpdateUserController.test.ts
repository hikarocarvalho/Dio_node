import createConnection from "../../database/index";
import { UpdateUserController } from "./UpdateUserController";
import { getConnection } from "typeorm";
import { makeMockRequest } from "../../utils/mocks/mockRequest";
import { makeMockResponse } from "../../utils/mocks/mockResponse";
import { FakeData } from "../../utils/mocks/fackeData/FakeData";

describe("UpdateUserController", () => {
  const updateUserController = new UpdateUserController();

  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.query("DELETE FROM USERS");
    await connection.close();
  });
  
  const fakeData = new FakeData();
  const response = makeMockResponse();

  const request = makeMockRequest({
    id:fakeData.fakeData[0].id,
    body:{...fakeData.fakeData[0],name:"testosogostoso"}
  });
  
  it("Need to return the same data value", async () => {
    fakeData.createUser();
    await updateUserController.handle(request, response);
    expect(response.state.status).toBe(204);
  });
});
