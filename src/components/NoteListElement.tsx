import React from "react";
import { Note } from "../types";
import { Link } from "react-router-dom";

type Props = {
  note: Note;
};

function NoteListElement({ note }: Props) {
  const { id, title, dueTimestamp } = note;
  return (
    <>
      <Link to={`/note/${id}`}>
        {dueTimestamp ? "TIME SENSITIVE" : null}
        <h1>{title}</h1>
      </Link>
    </>
  );
}

export default NoteListElement;
