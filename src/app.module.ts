import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { TeamModule } from './team/team.module';
import { Users } from './Models/user.models';
import { TeamMember } from './Models/team.model';
import { AuthModuleOptions } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Users, TeamMember]),
    AuthModuleOptions,
    TeamModule,
  ],
})
export class AppModule {}
