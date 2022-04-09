import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from 'redux/auth/authOperations';
import { getToken } from "redux/auth/authSelectors";
import s from "../UserMenu/UserMenu.module.scss";
import { useTranslation } from 'react-i18next';



const LogOut = () => {
  const { t } = useTranslation();

  const token = useSelector(getToken);
  const dispatch = useDispatch()

  return <button
    className={s.button}
    onClick={() => dispatch(logoutUser(token))}
    type="button"
  >
    {t('headerLogOut.logOut')}
  </button>;
}

export default LogOut;

