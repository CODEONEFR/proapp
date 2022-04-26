import { ModulWhereInput } from "./ModulWhereInput";
import { ModulOrderByInput } from "./ModulOrderByInput";

export type ModulFindManyArgs = {
  where?: ModulWhereInput;
  orderBy?: Array<ModulOrderByInput>;
  skip?: number;
  take?: number;
};
