import { getConnection } from "typeorm";
import createConnection from "../../database/index";
import { CreateUserService } from "./CreateUserService";
import { v4 as uuid } from "uuid";

describe('CreateUserService',() => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = await getConnection();
        await connection.query('DELETE FROM users');
        await connection.close();
    });

    const createUserService = new CreateUserService();
    const userPreload = {
        id:uuid(),
        name:"user",
        email:"user@email.com"
    };
    it('Need to return the id from the new user', async () => {
        const result = await createUserService.execute(userPreload);

        expect(result).toHaveProperty('id');
    })
})