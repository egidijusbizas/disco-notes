import Journal from "../containers/Journal";
import { useNotesStorage } from "../hooks/useNotesStorage";

function AddNotePage() {
  const { notes } = useNotesStorage();
  return (
    <>
      <h1>Add note</h1>

      <Journal notes={Object.values(notes)} />
      <button>Add note</button>
    </>
  );
}

export default AddNotePage;
