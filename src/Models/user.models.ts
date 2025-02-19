import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Users extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column({ unique: true })
  email: string;

  @Column
  password: string;
}
