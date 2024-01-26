import { createBrowserRouter } from "react-router-dom";
import RootPage from "./RootPage";
import NotesPage from "./NotesPage";
import NotePage from "./NotePage";
import AddNotePage from "./AddNotePage";
import { ROUTES } from "../consts";
import NotesArchivePage from "./NotesArchivePage";
import EditNotePage from "./EditNotePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: `${ROUTES.NOTE}/:id`,
        element: <NotePage />,
      },
      {
        path: `${ROUTES.ADD_NOTE}`,
        element: <AddNotePage />,
      },
      {
        path: `${ROUTES.EDIT_NOTE}/:id`,
        element: <EditNotePage />,
      },
      {
        path: `${ROUTES.NOTES}`,
        element: <NotesPage />,
      },
      {
        path: `${ROUTES.NOTES_ARCHIVE}`,
        element: <NotesArchivePage />,
      },
      // {
      //   element: <AuthLayout />,
      //   children: [
      //     {
      //       path: "login",
      //       element: <Login />,
      //       loader: redirectIfUser,
      //     },
      //     {
      //       path: "logout",
      //       action: logoutUser,
      //     },
      //   ],
      // },
    ],
  },
]);
