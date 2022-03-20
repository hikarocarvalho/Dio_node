import createConnection from "../../database/index";
import { getConnection } from "typeorm";
import { UpdateUserService } from "./UpdateUserService";
import { FakeData } from "../../utils/mocks/fackeData/FakeData";

describe('UpdateUserService',()=>{
    beforeAll(async () => {
        const connection = createConnection();
        await (await connection).runMigrations();
    });

    afterAll( async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM USERS');
        await connection.close()
    });

    const fakeData = new FakeData();
    const updateUserService = new UpdateUserService();
    it("Need to edit the name of the user",async()=>{
        fakeData.createUser();
        const result = await updateUserService.execute({
            ...fakeData.fakeData[0],
            name:"teste segundo",
            email:"testetestoso@teste.com"
        });
        console.log(result);
        expect(result.affected).toEqual(1);
        
    })
})