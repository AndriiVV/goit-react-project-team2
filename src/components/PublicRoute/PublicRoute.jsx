import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";

const PublicRoute = ({ path, children }) => {
  const isAuth = useSelector(getIsAuth);

  return isAuth ? (
    <Redirect to={"/library"} />
  ) : (
    <Route path={path}>{children}</Route>
  );
};

export default PublicRoute;
