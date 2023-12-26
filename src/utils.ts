import { Notes } from "./types";

export const getNoteById = (notes: Notes, id: string) =>
  notes.filter((note) => note.id === id)[0];
