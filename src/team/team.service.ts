import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TeamMember } from 'src/Models/team.model';


@Injectable()
export class TeamService {
  constructor(@InjectModel(TeamMember) private teamModel: typeof TeamMember) {}

  async addMember(name: string, role: string): Promise<TeamMember> {
    return this.teamModel.create({ name, role });
  }

  async getAllMembers(): Promise<TeamMember[]> {
    return this.teamModel.findAll();
  }

  async updateMember(id: number, name: string, role: string) {
    return this.teamModel.update({ name, role }, { where: { id } });
  }

  async deleteMember(id: number) {
    return this.teamModel.destroy({ where: { id } });
  }
}
