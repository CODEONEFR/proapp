import { QuestionWhereUniqueInput } from "./QuestionWhereUniqueInput";
import { QuestionUpdateManyWithoutQuestionsInput } from "./QuestionUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  categorie?: string | null;
  question?: QuestionWhereUniqueInput | null;
  questions?: QuestionUpdateManyWithoutQuestionsInput;
};
