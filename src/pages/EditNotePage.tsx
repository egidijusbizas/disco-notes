import { useState } from "react";
import { useNotesStorage } from "../hooks/useNotesStorage";
import { Note, NoteInput } from "../types";
import { useParams } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { MODES } from "../consts";
import { router } from "./router";

function EditNotePage() {
  const { id } = useParams();
  const { notes, editNote } = useNotesStorage();

  if (!id) throw new Error(`id ${id} not found`);

  const note = notes[id];

  const initialFormData = note;

  const handleSubmit = async (event: React.FormEvent, formData: NoteInput) => {
    event.preventDefault();
    const editedNote: Note = {
      ...note,
      ...formData,
    };
    await editNote(editedNote);
  };
  return (
    <>
      <button onClick={() => router.navigate(-1)}>Back</button>
      <h1>Edit note</h1>
      <NoteForm
        mode={MODES.EDIT}
        initialFormData={initialFormData}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default EditNotePage;
