import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { TeamMember } from 'src/Models/team.model';


@Module({
  imports: [SequelizeModule.forFeature([TeamMember])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
