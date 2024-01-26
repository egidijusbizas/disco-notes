import React, { useState } from "react";
import { Note } from "../types";
import NoteListElement from "../components/NoteListElement";
import { ROUTES } from "../consts";
import { Link } from "react-router-dom";
import "./Journal.css";
import NotePreview from "../components/NotePreview";

type Props = {
  notesByDay: Record<string, Note[]>;
  editNote: (note: Note) => void;
};

function Journal({ notesByDay, editNote }: Props) {
  const [preview, setPreview] = useState<Note>();
  return (
    <>
      <h1>Tasks</h1>
      <div className="tasks">
        <div className="list">
          {Object.entries(notesByDay).map(([date, notes]) => (
            <div className="darkcard" key={date}>
              <h4>{`${date} ${new Intl.DateTimeFormat("en-US", {
                weekday: "long",
              })
                .format(Date.parse(date))
                .toUpperCase()}`}</h4>
              {notes.map((note) => (
                <div
                  className="content task-preview-container"
                  key={note.id}
                  onMouseEnter={() => setPreview(note)}
                  onMouseLeave={() => setPreview(undefined)}
                >
                  <div className="">
                    <NoteListElement note={note} editNote={editNote} />
                  </div>
                  <div className="preview">
                    {preview?.id === note.id ? (
                      <NotePreview note={preview} />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className="buttons">
            <Link to={`/${ROUTES.ADD_NOTE}`}>
              <button>Add note</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Journal;
