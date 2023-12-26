import { Link, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../consts";

function RootPage() {
  const { pathname } = useLocation();
  const isRoot = pathname === "/";
  return isRoot ? (
    <>
      <div></div>
      <h1>Disco Notes</h1>
      <Link to={ROUTES.NOTES}>Notes</Link>
    </>
  ) : (
    <Outlet />
  );
}

export default RootPage;
