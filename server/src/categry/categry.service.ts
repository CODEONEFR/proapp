import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CategryServiceBase } from "./base/categry.service.base";

@Injectable()
export class CategryService extends CategryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
