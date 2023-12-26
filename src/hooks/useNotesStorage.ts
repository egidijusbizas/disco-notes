import { useState } from "react";
import { NOTES } from "../consts";
import { Note, Notes } from "../types";
import { useLocalStorage } from "./useLocalStorage";
import { DUMMY_NOTES } from "../mocks";

export const useNotesStorage = () => {
  const [storageNotes, setStorageNotes] = useLocalStorage(NOTES, {});
  const fallbackNotes = Boolean(storageNotes.length)
    ? storageNotes
    : DUMMY_NOTES;
  const [notes, setNotes] = useState<Notes>(fallbackNotes);
  console.log(
    "🚀 ~ file: useNotesStorage.ts:13 ~ useNotesStorage ~ notes:",
    notes
  );

  const getNote = (id: string) => notes[id];

  const addNote = (noteDraft: Note) => {
    const note = { ...noteDraft, createdTimestamp: Date.now().toString() };
    setNotes({ ...notes, note });
    setStorageNotes(notes);
  };

  const editNote = (noteDraft: Note) => {
    const note = { ...noteDraft, updatedTimestamp: Date.now().toString() };
    setNotes({ ...notes, note });
    setStorageNotes(notes);
  };

  return { notes, getNote, addNote, editNote };
};
