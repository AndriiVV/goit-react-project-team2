import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from 'redux/auth/authOperations';
import { getToken } from "redux/auth/authSelectors";
import s from "../UserMenu/UserMenu.module.scss";
import { useTranslation } from 'react-i18next';
import React, {useState} from 'react';
import LogOutModal from "components/LogOutModal/LogOutModal";


const LogOut = () => {
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = e => setIsOpenModal(!isOpenModal);

  const token = useSelector(getToken);
  const dispatch = useDispatch()

  return (
    <>
      <button
        className={s.button}
        //TODO: было у Насти
        // onClick={() => dispatch(logoutUser(token))} 
        onClick={() => toggleModal()}
        type="button"
      >
        {t('headerLogOut.logOut')}
      </button>   
    
      {isOpenModal && (
        <LogOutModal
          onClose={() => toggleModal()}
          onLogOut={() => dispatch(logoutUser(token))}
        />
      )}
    </>

  )
}

export default LogOut;

