import { IsString, IsPositive } from "class-validator";

export class AddUserDto {
  @IsString()
  readonly name: string;

  @IsPositive()
  readonly age: number;
}
