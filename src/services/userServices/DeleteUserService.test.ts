import { getConnection } from "typeorm";
import createConnection from "../../database/index";
import { DeleteUserService } from "./DeleteUserService";
import { FakeData } from "../../utils/mocks/fackeData/FakeData";

describe('DeleteUserService',() => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = await getConnection();
        await connection.close();
    });

    const fakeData = new FakeData();
    const deleteUserService = new DeleteUserService();

    it('Need to return the id from the new user', async () => {
        fakeData.createUser();
        const result = await deleteUserService.execute({id:fakeData.fakeData[0].id});
        console.log(result);
        expect(result.affected).toBe(1);
    })
})