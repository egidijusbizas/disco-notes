import { useParams } from "react-router";
import { useNotesStorage } from "../hooks/useNotesStorage";
import { router } from "./router";
import { ROUTES } from "../consts";

function NotePage() {
  const { id } = useParams();
  if (!id) {
    throw new Error("id not found");
  }
  const { getNote, editNote, deleteNote } = useNotesStorage();
  const note = getNote(id);
  if (!note) {
    throw new Error("note not found");
  }

  const onDone = () => {
    const updatedNote = { ...note, isCompleted: true };
    editNote(updatedNote);
  };

  return (
    <>
      <div></div>
      <button onClick={() => router.navigate(-1)}>Back</button>
      <div className="darkcard">
        <h6> Note {id}</h6>
        <h2>{note.title}</h2>
        <h4>{note.dueTimestamp}</h4>
        <h4>{note.description}</h4>
      </div>
      <button onClick={() => router.navigate(`/${ROUTES.EDIT_NOTE}/${id}`)}>
        Edit
      </button>
      <button onClick={onDone}>Complete</button>
      <button onClick={() => deleteNote(id)}>Delete</button>
    </>
  );
}

export default NotePage;
