import { Note, Notes } from "./types";

export const DUMMY_ENTRY: Note = {
  id: "0",
  title: "Example entry",
  createdTimestamp: Date.now().toString(),
  isCompleted: false,
  description: "Example note description",
};

export const DUMMY_NOTES: Notes = {
  ["0"]: DUMMY_ENTRY,
};
