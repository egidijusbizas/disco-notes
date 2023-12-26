import React from "react";
import { Note } from "../types";
import NoteListElement from "../components/NoteListElement";

type Props = {
  notes: Note[];
};

function Journal({ notes }: Props) {
  return (
    <>
      <h1>Disco Notes</h1>
      {notes.map((note) => (
        <NoteListElement note={note} />
      ))}
    </>
  );
}

export default Journal;
