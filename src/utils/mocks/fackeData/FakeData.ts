import { CreateUserService } from "../../../services/userServices/CreateUserService";
import { v4 as uuid } from "uuid";

class FakeData {
  fakeData = [
    {
      id: uuid(),
      name: "usuário",
      email: "email@email.com",
    },
    {
      id: uuid(),
      name: "usuárioDois",
      email: "emailDois@email.com",
    },
  ];
  createUserService = new CreateUserService();
  defaultValues() {
    return this.fakeData;
  }
  execute() {

    const request = this.defaultValues();

    request.forEach(async (item) => {
      await this.createUserService.execute(item);
    });
  }
  async createUser(){
    await this.createUserService.execute(this.fakeData[0])
  }
}

export { FakeData };
