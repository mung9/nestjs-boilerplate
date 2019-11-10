import { Injectable, Inject } from "@nestjs/common";
import { Providers } from "../constants";
import { User, UserAttributes } from "../database/models/User";
import { AddUserDto } from "../dto";

@Injectable()
export class UserDao {
  constructor(@Inject(Providers.USER_TABLE) private user: typeof User) {}

  public getById(id: number): Promise<User> {
    return this.user.findOne({ where: { id } });
  }

  public add(addUserDto: AddUserDto): Promise<User> {
    console.log(addUserDto);
    return this.user.create(addUserDto);
  }
}
