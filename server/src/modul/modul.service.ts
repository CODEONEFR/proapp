import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ModulServiceBase } from "./base/modul.service.base";

@Injectable()
export class ModulService extends ModulServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
