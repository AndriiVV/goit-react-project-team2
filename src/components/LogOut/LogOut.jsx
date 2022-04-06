import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from 'redux/auth/authOperations';
import { getToken } from "redux/auth/authSelectors";
import s from "../LogOut/GoogleSignIn.module.css"

const LogOut = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch()

  return <button
    className={s.btnLogout}
    onClick={() => dispatch(logoutUser(token))}>Вихід</button>;
}

export default LogOut;

