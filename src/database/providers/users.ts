import { User } from "../models/User";
import { Providers } from "../../constants";
import { Provider } from "@nestjs/common";

export const usersProviders: Provider[] = [
  {
    provide: Providers.USER_TABLE,
    useValue: User
  }
];
