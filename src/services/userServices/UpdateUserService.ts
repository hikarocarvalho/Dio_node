import { getRepository } from "typeorm";
import { User } from "../../entities/User";

interface IUser{
    id: string;
    name: string;
    email?: string;
}

class UpdateUserService {
    async execute({id,name,email}:IUser) {
        const user = await getRepository(User)
          .createQueryBuilder("users")
          .update()
          .set({name:name,email:email})
          .where("id=:id",{id})
          .execute();
        return user;
      }
}

export { UpdateUserService };
