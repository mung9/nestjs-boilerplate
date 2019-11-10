import { Injectable } from "@nestjs/common";
import { AddUserDto } from "../dto/users";
import { UserDao } from "../dao/User";
import { User } from "../database/models/User";

@Injectable()
export class UserService {
  public constructor(private userDao: UserDao) {}

  public async findUser(id: number): Promise<User> {
    return await this.userDao.getById(id);
  }

  public async addUser(addUserDto: AddUserDto): Promise<User> {
    return await this.userDao.add(addUserDto);
  }
}
