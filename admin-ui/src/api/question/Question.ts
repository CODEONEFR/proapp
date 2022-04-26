export type Question = {
  categorie: string | null;
  createdAt: Date;
  id: string;
  question?: Question | null;
  questions?: Array<Question>;
  updatedAt: Date;
};
