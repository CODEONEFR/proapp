import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "./QuestionWhereUniqueInput";
import { QuestionListRelationFilter } from "./QuestionListRelationFilter";

export type QuestionWhereInput = {
  categorie?: StringNullableFilter;
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
  questions?: QuestionListRelationFilter;
};
