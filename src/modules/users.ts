import { Module } from "@nestjs/common";

import { usersProviders } from "../database/providers/users";
import { DatabaseModule } from "./database";
import { UserController } from "../controllers/user";
import { UserService } from "../services/user";
import { UserDao } from "../dao/User";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...usersProviders, UserService, UserDao]
})
export class UserModule {}
