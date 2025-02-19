import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import * as bcrypt from 'bcryptjs';
import { Users } from 'src/Models/user.models';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users) private userModel: typeof Users) {}

  async createUser(name: string, email: string, password: string): Promise<Users> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userModel.create({ name, email, password: hashedPassword });
  }

  async findByEmail(email: string): Promise<Users | null> {
    return this.userModel.findOne({ where: { email } });
  }
}
