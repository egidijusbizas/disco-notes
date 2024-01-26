import { useState } from "react";
import { useNotesStorage } from "../hooks/useNotesStorage";
import { Note, NoteInput } from "../types";
import { MODES, ROUTES } from "../consts";
import { router } from "./router";
import NoteForm from "../components/NoteForm";

function AddNotePage() {
  const { notes, addNote } = useNotesStorage();
  const noteIndex = Number(Object.keys(notes).at(-1) || -1) + 1;
  console.log(
    "debug ~ file: AddNotePage.tsx:11 ~ AddNotePage ~ noteIndex:",
    noteIndex
  );
  const initialFormData = {
    title: "",
    description: "",
    dueTimestamp: "",
    dueTime: "",
    dueDate: "",
    tags: [],
  };
  const handleSubmit = async (event: React.FormEvent, formData: NoteInput) => {
    event.preventDefault();
    const note: Note = {
      id: noteIndex.toString(),
      createdTimestamp: Date.now().toString(),
      isCompleted: false,
      ...formData,
    };
    await addNote(note);
  };

  return (
    <>
      <button onClick={() => router.navigate(-1)}>Back</button>
      <h1>Add note</h1>
      <NoteForm
        mode={MODES.ADD}
        initialFormData={initialFormData}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default AddNotePage;
