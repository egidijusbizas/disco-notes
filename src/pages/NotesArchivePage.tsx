import { ROUTES } from "../consts";
import Journal from "../containers/Journal";
import { useNotesStorage } from "../hooks/useNotesStorage";
import { Note } from "../types";
import { router } from "./router";

function NotesArchivePage() {
  const { notes, editNote } = useNotesStorage();

  const notesByDay: Record<string, Note[]> = {};

  Object.values(notes)
    .filter((note) => note.isCompleted)
    .sort((a, b) => Number(b.createdTimestamp) - Number(a.createdTimestamp))
    .forEach((note) => {
      const date = new Date(Number(note.createdTimestamp));
      const dateString = `${date.getFullYear()}-${
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1
      }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
      notesByDay[dateString] = [...(notesByDay[dateString] ?? []), note];
    });
  return (
    <>
      <button onClick={() => router.navigate(`/${ROUTES.NOTES}`)}>Notes</button>
      <Journal notesByDay={notesByDay} editNote={editNote} />
    </>
  );
}

export default NotesArchivePage;
