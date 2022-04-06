import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from 'redux/auth/authOperations';
import { getToken } from "redux/auth/authSelectors";
import s from "../UserMenu/UserMenu.module.scss"

const LogOut = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch()

  return <button
    className={s.button}
    onClick={() => dispatch(logoutUser(token))}
    type="button"
  >
    Вихід
  </button>;
}

export default LogOut;

