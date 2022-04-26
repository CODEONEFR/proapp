import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ModulWhereInput = {
  category?: StringNullableFilter;
  id?: StringFilter;
  mandatory?: StringNullableFilter;
  question?: StringNullableFilter;
};
