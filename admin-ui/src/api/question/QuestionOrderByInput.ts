import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  categorie?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  questionId?: SortOrder;
  updatedAt?: SortOrder;
};
