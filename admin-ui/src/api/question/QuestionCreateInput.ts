import { QuestionWhereUniqueInput } from "./QuestionWhereUniqueInput";
import { QuestionCreateNestedManyWithoutQuestionsInput } from "./QuestionCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  categorie?: string | null;
  question?: QuestionWhereUniqueInput | null;
  questions?: QuestionCreateNestedManyWithoutQuestionsInput;
};
