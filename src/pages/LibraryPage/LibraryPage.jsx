import Container from 'components/common/Container/Container';
import FormAddBook from 'components/FormAddBook/FormAddBook';
import LibraryModal from 'components/LibraryModal/LibraryModal';
import Library from 'components/Library/Library';
import GoingToRead from '../../components/GointToRead/GoingToRead';
import s from './LibraryPage.module.css';
import { NavLink } from 'react-router-dom';
// import second from 'first';

import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/auth/authSelectors';
import { useEffect, useState } from 'react';

import GoToReadMobile from 'components/GoToReadMobile/GoToReadMobile';
import { useTranslation } from 'react-i18next';
import { getUserBooks } from 'redux/book/bookSelectors';
import { getUserData } from 'redux/book/bookOperations';

const LibraryPage = () => {
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isLoading = useSelector(getIsLoading);
  const stateRedux = useSelector(getUserBooks)
  const dispatch = useDispatch()

  useEffect(() => {
    if (stateRedux.goingToRead.length === 0 || stateRedux.currentlyReading.length === 0 ) {
      dispatch(getUserData())
    }
  }, [dispatch])

  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const books = useSelector(getUserBooks);
  const bookList = books.length === 0;

  return (
    <Container>
      <div className={s.libraryPage}>
        <FormAddBook />
        <GoingToRead />
        {/* <GoToReadMobile/> */}
        <NavLink to="/training">
          <button type="button" className={s.libraryBtn}>
            {t('GoToRead.button')}
          </button>
        </NavLink>
        {/* <Library /> */}
        {bookList && !isOpenModal && (
          <LibraryModal onClose={closeModal}></LibraryModal>
        )}
      </div>
    </Container>
  );
};

export default LibraryPage;
