import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database";
import { UserModule } from "./users";

@Module({
  imports: [DatabaseModule, UserModule]
})
export class AppModule {}
