import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class TeamMember extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  role: string;
}
