import { router } from "../pages/router";
import { useState } from "react";
import { NOTES, ROUTES } from "../consts";
import { Note, Notes } from "../types";
import { useLocalStorage } from "./useLocalStorage";
import { DUMMY_NOTES } from "../mocks";

export const useNotesStorage = () => {
  const [storageNotes, setStorageNotes] = useLocalStorage(NOTES, {});
  const fallbackNotes = Boolean(storageNotes) ? storageNotes : DUMMY_NOTES;
  const [notes, setNotes] = useState<Notes>(fallbackNotes);

  console.log(
    "🚀 ~ file: useNotesStorage.ts:13 ~ useNotesStorage ~ notes:",
    notes
  );

  const getNote = (id: string) => notes[id];

  const addNote = async (note: Note) => {
    const updatedNotes = { ...notes, [note.id]: note };
    setStorageNotes(updatedNotes);
    setNotes(updatedNotes);
    router.navigate(`/${ROUTES.NOTES}`);
  };

  const editNote = (noteDraft: Note) => {
    const note = { ...noteDraft, updatedTimestamp: Date.now().toString() };
    setNotes({ ...notes, [note.id]: note });
    setStorageNotes({ ...notes, [note.id]: note });
    router.navigate(`/${ROUTES.NOTES}`);
  };

  const deleteNote = (noteIdx: string) => {
    const updatedNotes = Object.fromEntries(
      Object.entries(notes).filter(([id, _]) => id !== noteIdx)
    );
    setNotes(updatedNotes);
    setStorageNotes(updatedNotes);
    router.navigate(`/${ROUTES.NOTES}`);
  };

  return { notes, getNote, addNote, editNote, deleteNote };
};
