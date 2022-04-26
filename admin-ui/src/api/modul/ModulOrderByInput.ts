import { SortOrder } from "../../util/SortOrder";

export type ModulOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mandatory?: SortOrder;
  question?: SortOrder;
  updatedAt?: SortOrder;
};
