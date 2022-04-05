import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";

const PrivateRoute = ({ path, children }) => {
  const isAuth = useSelector(getIsAuth);

  return isAuth ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Redirect to={"/login"} />
  );
};

export default PrivateRoute;
