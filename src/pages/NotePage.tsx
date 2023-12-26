import { useParams } from "react-router";
import { useNotesStorage } from "../hooks/useNotesStorage";

function NotePage() {
  const { id } = useParams();
  if (!id) {
    throw new Error("id not found");
  }
  const { getNote } = useNotesStorage();
  const note = getNote(id);
  if (!note) {
    throw new Error("note not found");
  }
  return (
    <>
      <div></div>
      <h1>Disco Note {id}</h1>
      <h1>{note.title}</h1>
      <h1>{note.description}</h1>
      <div className="card"></div>
    </>
  );
}

export default NotePage;
