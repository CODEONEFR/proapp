import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CategryService } from "./categry.service";
import { CategryControllerBase } from "./base/categry.controller.base";

@swagger.ApiTags("categries")
@common.Controller("categries")
export class CategryController extends CategryControllerBase {
  constructor(
    protected readonly service: CategryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
