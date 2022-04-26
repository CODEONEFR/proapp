import { Module } from "@nestjs/common";
import { ModulModuleBase } from "./base/modul.module.base";
import { ModulService } from "./modul.service";
import { ModulController } from "./modul.controller";
import { ModulResolver } from "./modul.resolver";

@Module({
  imports: [ModulModuleBase],
  controllers: [ModulController],
  providers: [ModulService, ModulResolver],
  exports: [ModulService],
})
export class ModulModule {}
