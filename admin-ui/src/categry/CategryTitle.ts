import { Categry as TCategry } from "../api/categry/Categry";

export const CATEGRY_TITLE_FIELD = "name";

export const CategryTitle = (record: TCategry): string => {
  return record.name || record.id;
};
