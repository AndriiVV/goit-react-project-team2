import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from 'redux/auth/authOperations';
import { getToken } from "redux/auth/authSelectors";

const LogOut = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch()

  return <button onClick={() => dispatch(logoutUser(token))}>Log out</button>;
}

export default LogOut;
