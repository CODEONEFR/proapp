import { Question as TQuestion } from "../api/question/Question";

export const QUESTION_TITLE_FIELD = "categorie";

export const QuestionTitle = (record: TQuestion): string => {
  return record.categorie || record.id;
};
