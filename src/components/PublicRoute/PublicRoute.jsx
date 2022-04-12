import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";

const PublicRoute = ({ exact, path, children }) => {
  const isAuth = useSelector(getIsAuth);
  // console.log("Public", isAuth)

  return isAuth ? (
    <Redirect to={"/library"} />
    // <Switch>
    //   <Route path={"/library"} />
    //   <Route path={"/training"} />
    // </Switch>
  ) : (
        <Route exact={exact} path={path}>{children}</Route>
        

  );
};

export default PublicRoute;
