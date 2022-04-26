import { CategryWhereInput } from "./CategryWhereInput";
import { CategryOrderByInput } from "./CategryOrderByInput";

export type CategryFindManyArgs = {
  where?: CategryWhereInput;
  orderBy?: Array<CategryOrderByInput>;
  skip?: number;
  take?: number;
};
