import { Modul as TModul } from "../api/modul/Modul";

export const MODUL_TITLE_FIELD = "category";

export const ModulTitle = (record: TModul): string => {
  return record.category || record.id;
};
