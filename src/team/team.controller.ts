import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Post('add')
  async addMember(@Body() body: { name: string; role: string }) {
    return this.teamService.addMember(body.name, body.role);
  }

  @Get()
  async getAllMembers() {
    return this.teamService.getAllMembers();
  }

  @Put('update/:id')
  async updateMember(@Param('id') id: number, @Body() body: { name: string; role: string }) {
    return this.teamService.updateMember(id, body.name, body.role);
  }

  @Delete('delete/:id')
  async deleteMember(@Param('id') id: number) {
    return this.teamService.deleteMember(id);
  }
}
