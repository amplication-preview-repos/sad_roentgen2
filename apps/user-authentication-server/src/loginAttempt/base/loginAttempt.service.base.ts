/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  LoginAttempt as PrismaLoginAttempt,
  User as PrismaUser,
} from "@prisma/client";

export class LoginAttemptServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LoginAttemptCountArgs, "select">
  ): Promise<number> {
    return this.prisma.loginAttempt.count(args);
  }

  async loginAttempts(
    args: Prisma.LoginAttemptFindManyArgs
  ): Promise<PrismaLoginAttempt[]> {
    return this.prisma.loginAttempt.findMany(args);
  }
  async loginAttempt(
    args: Prisma.LoginAttemptFindUniqueArgs
  ): Promise<PrismaLoginAttempt | null> {
    return this.prisma.loginAttempt.findUnique(args);
  }
  async createLoginAttempt(
    args: Prisma.LoginAttemptCreateArgs
  ): Promise<PrismaLoginAttempt> {
    return this.prisma.loginAttempt.create(args);
  }
  async updateLoginAttempt(
    args: Prisma.LoginAttemptUpdateArgs
  ): Promise<PrismaLoginAttempt> {
    return this.prisma.loginAttempt.update(args);
  }
  async deleteLoginAttempt(
    args: Prisma.LoginAttemptDeleteArgs
  ): Promise<PrismaLoginAttempt> {
    return this.prisma.loginAttempt.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.loginAttempt
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
