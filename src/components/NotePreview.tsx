import React from "react";
import { Note } from "../types";
import { Link } from "react-router-dom";
import "./NoteListElement.css";

type Props = {
  note: Note;
};

function NotePreview({ note }: Props) {
  const { id, title, description } = note;

  return (
    <>
      <div className="darkcard grid-vertical">
        <h4>{title}</h4>
        <h4>{description}</h4>
      </div>
    </>
  );
}

export default NotePreview;
