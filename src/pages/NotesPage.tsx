import Journal from "../containers/Journal";
import { useNotesStorage } from "../hooks/useNotesStorage";

function NotesPage() {
  const { notes } = useNotesStorage();
  return <Journal notes={Object.values(notes)} />;
}

export default NotesPage;
