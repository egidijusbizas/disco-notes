import React from "react";
import { Note } from "../types";
import { Link } from "react-router-dom";
import "./NoteListElement.css";

type Props = {
  note: Note;
  editNote: (note: Note) => void;
};

function daysBetween(timestamp1: number, timestamp2: number) {
  var difference = timestamp1 - timestamp2;
  var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
  return daysDifference + " day(s)";
}

function NoteListElement({ note, editNote }: Props) {
  const { id, title, dueTimestamp, dueDate, dueTime } = note;
  const dueDatetime = dueTimestamp
    ? new Date(dueTimestamp).toUTCString()
    : null;
  console.log(
    "debug ~ file: NoteListElement.tsx:20 ~ NoteListElement ~ dueDatetime:",
    dueDatetime
  );
  const dueDelta = dueTimestamp
    ? daysBetween(Number(new Date(dueTimestamp)), Number(Date.now().toString()))
    : null;

  const onDone = () => {
    const updatedNote = { ...note, isCompleted: true };
    editNote(updatedNote);
  };

  return (
    <>
      <div className="card grid">
        <div>
          {dueTimestamp ? (
            <span>{`Due ${dueDatetime} in ${dueDelta}`}</span>
          ) : (
            <span></span>
          )}
          {dueDate ? <span>{` ${dueDate}`}</span> : <span></span>}
          {dueTime ? <span>{` At ${dueTime}`}</span> : <span></span>}
        </div>

        <Link to={`/note/${id}`}>
          <h3>{title}</h3>
        </Link>
        <button onClick={onDone}>Done</button>
      </div>
    </>
  );
}

export default NoteListElement;
