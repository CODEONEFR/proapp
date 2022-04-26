import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ModulService } from "./modul.service";
import { ModulControllerBase } from "./base/modul.controller.base";

@swagger.ApiTags("moduls")
@common.Controller("moduls")
export class ModulController extends ModulControllerBase {
  constructor(
    protected readonly service: ModulService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
