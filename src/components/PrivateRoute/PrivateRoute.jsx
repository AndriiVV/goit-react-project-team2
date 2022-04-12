import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";

const PrivateRoute = ({ exact, path, children }) => {
  const isAuth = useSelector(getIsAuth);
  console.log("Private", isAuth)
  return isAuth ? (
    
      <Route exact={exact} path={path}>{children}</Route>
    
  ) : (
    <Redirect to={"/login"} />
  );
};

export default PrivateRoute;
