import { Table, Column, DataType, Model } from "sequelize-typescript";

export interface UserAttributes {
  id?: number;
  name: string;
  age: number;
}

@Table
export class User extends Model<User> implements UserAttributes {
  @Column({
    type: DataType.INTEGER(),
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @Column({
    type: DataType.STRING(64)
  })
  name: string;

  @Column({
    type: DataType.INTEGER()
  })
  age: number;
}
