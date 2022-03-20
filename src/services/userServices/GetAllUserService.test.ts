import { getConnection } from 'typeorm';
import createConnection from '../../database/index';
import { GetAllUserService } from './GetAllUserService';
import {FakeData} from '../../utils/mocks/fackeData/FakeData';

describe('GetAllUserService',() => {
    const getAllUserService = new GetAllUserService();
    const fakeData = new FakeData();

    beforeAll(async () => {
        const connection = createConnection();
        await (await connection).runMigrations();
    });

    afterAll( async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM USERS');
        await connection.close()
    });

    it('Need return the created users',async () => {
        await fakeData.execute();
        const values = fakeData.defaultValues();
        const result = await getAllUserService.execute();
        expect(result).toMatchObject(values);
    });
})