import {
  Controller,
  Body,
  Get,
  Put,
  Headers,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Post,
  Param
} from "@nestjs/common";
import { AddUserDto } from "../dto";
import { UserService } from "../services/user";
import { AuthGuard } from "../guards/auth";
import { User } from "../database/models/User";

@Controller("/users")
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Get("/:id")
  public async getUser(@Param("id") id: number): Promise<User> {
    const user = await this.userService.findUser(id);
    return user;
  }

  @Post("/")
  @UsePipes(ValidationPipe)
  public async addUser(@Body() addUserDto: AddUserDto): Promise<User> {
    const createdUser = await this.userService.addUser(addUserDto);
    return createdUser;
  }
}
