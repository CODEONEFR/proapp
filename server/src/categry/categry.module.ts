import { Module } from "@nestjs/common";
import { CategryModuleBase } from "./base/categry.module.base";
import { CategryService } from "./categry.service";
import { CategryController } from "./categry.controller";
import { CategryResolver } from "./categry.resolver";

@Module({
  imports: [CategryModuleBase],
  controllers: [CategryController],
  providers: [CategryService, CategryResolver],
  exports: [CategryService],
})
export class CategryModule {}
