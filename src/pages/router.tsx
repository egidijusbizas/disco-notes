import { createBrowserRouter } from "react-router-dom";
import RootPage from "./RootPage";
import NotesPage from "./NotesPage";
import NotePage from "./NotePage";
import AddNotePage from "./AddNotePage";
import { ROUTES } from "../consts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: `${ROUTES.NOTE}/:id`,
        element: <NotePage />,
        // loader: ({ request }) =>
        //   fetch("/api/dashboard.json", {
        //     signal: request.signal,
        //   }),
      },
      {
        path: `${ROUTES.ADD_NOTE}`,
        element: <AddNotePage />,
        // loader: ({ request }) =>
        //   fetch("/api/dashboard.json", {
        //     signal: request.signal,
        //   }),
      },
      {
        path: `${ROUTES.NOTES}`,
        element: <NotesPage />,
        // loader: ({ request }) =>
        //   fetch("/api/dashboard.json", {
        //     signal: request.signal,
        //   }),
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
