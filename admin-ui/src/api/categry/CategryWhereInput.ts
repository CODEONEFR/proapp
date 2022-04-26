import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
